"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";

const skills = [
  "Python",
  "Django",
  "C++",
  "SQL",
  "Linux",
  "GAN",
  "ESP32",
  "Arduino",
  "CCNA",
  "WebSockets",
  "React",
];

export function SkillFilter() {
  const t = useTranslations("skills");
  const [active, setActive] = useState<string | undefined>();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          {t("title")}
        </h2>
        <p className="mt-1 text-sm text-text-muted">{t("subtitle")}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() =>
                setActive((prev) => (prev === skill ? undefined : skill))
              }
              className={cn(
                "rounded-lg border px-3 py-1.5 font-mono text-xs transition-all",
                active === skill
                  ? "border-accent-cyan bg-accent-cyan/15 text-accent-cyan scale-105"
                  : "border-border text-text-muted hover:border-accent-cyan/40",
              )}
            >
              {skill}
            </button>
          ))}
          {active && (
            <button
              type="button"
              onClick={() => setActive(undefined)}
              className="rounded-lg px-3 py-1.5 text-xs text-accent-amber hover:underline"
            >
              {t("clear")}
            </button>
          )}
        </div>
      </section>
      <FeaturedProjects skillFilter={active} />
    </>
  );
}
