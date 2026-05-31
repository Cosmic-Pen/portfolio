"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type EngagementCardProps = {
  id: string;
};

export function EngagementCard({ id }: EngagementCardProps) {
  const t = useTranslations("engagements");
  const item = t.raw(`items.${id}`) as {
    title: string;
    org: string;
    t1: string;
    t2: string;
    t3?: string;
    media?: string | string[];
  };

  const tasks = [item.t1, item.t2, item.t3].filter(Boolean);

  // Normalize media to always be an array
  const rawMedia = item.media
    ? Array.isArray(item.media)
      ? item.media
      : [item.media]
    : [];

  // Sort: videos first, then images
  const mediaList = [
    ...rawMedia.filter((m) => m.endsWith(".mp4") || m.endsWith(".webm")),
    ...rawMedia.filter((m) => !m.endsWith(".mp4") && !m.endsWith(".webm")),
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + mediaList.length) % mediaList.length);
  const next = () => setCurrent((i) => (i + 1) % mediaList.length);

  const currentMedia = mediaList[current];
  const isVideo =
    currentMedia?.endsWith(".mp4") || currentMedia?.endsWith(".webm");

  return (
    <article className="rounded-xl border border-border bg-bg-elevated overflow-hidden">
      <div className="grid gap-0 md:grid-cols-5">

        {/* ── Media panel ── */}
        <div className="relative flex min-h-[200px] items-center justify-center border-b border-border bg-bg-primary md:col-span-2 md:border-b-0 md:border-r overflow-hidden">

          {mediaList.length > 0 ? (
            <>
              {/* Media display */}
              {isVideo ? (
                <video
                  key={currentMedia}
                  src={currentMedia}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover absolute inset-0"
                />
              ) : (
                <Image
                  key={currentMedia}
                  src={currentMedia}
                  alt={`${item.title} — media ${current + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              )}

              {/* Arrows — only show if more than 1 item */}
              {mediaList.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-1 text-white hover:bg-black/70 transition"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-1 text-white hover:bg-black/70 transition"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1">
                    {mediaList.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 w-1.5 rounded-full transition ${
                          i === current ? "bg-white" : "bg-white/40"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            // Fallback placeholder
            <div className="text-center text-text-muted p-4">
              <p className="font-mono text-[10px]">{t("mediaPlaceholder")}</p>
            </div>
          )}
        </div>

        {/* ── Text panel ── */}
        <div className="p-6 md:col-span-3">
          <h2 className="font-display text-lg font-semibold text-text-primary">
            {item.title}
          </h2>
          <p className="mt-1 text-sm text-accent-amber">{item.org}</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-text-muted">
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

      </div>
    </article>
  );
}