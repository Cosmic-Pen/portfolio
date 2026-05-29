"use client";

import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import { ProjectSection } from "./ProjectSection";
import { ImageIcon } from "lucide-react";

export function RoboticsSections() {
  const robotics = useTranslations("robotics");
  const smartCampus = projects.find((p) => p.id === "smart-campus");

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6">
      {smartCampus && (
        <ProjectSection
          project={smartCampus}
          comingSoonLabel={robotics("comingSoon")}
        />
      )}

      <div className="rounded-xl border border-border bg-bg-elevated p-8">
        <h2 className="font-display text-lg font-semibold text-text-primary">
          Smart Campus — system flow
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-text-muted sm:gap-4">
          <span className="rounded-lg border border-accent-amber/40 px-3 py-2">
            Solar
          </span>
          <span className="text-accent-cyan">→</span>
          <span className="rounded-lg border border-border px-3 py-2">
            Sensors
          </span>
          <span className="text-accent-cyan">→</span>
          <span className="rounded-lg border border-border px-3 py-2">
            MCU / Edge
          </span>
          <span className="text-accent-cyan">→</span>
          <span className="rounded-lg border border-accent-cyan/40 px-3 py-2">
            Web App
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-border bg-bg-primary"
          >
            <ImageIcon className="text-text-muted/40" size={24} />
          </div>
        ))}
        <p className="col-span-full text-center font-mono text-xs text-text-muted">
          {robotics("galleryPlaceholder")}
        </p>
      </div>
    </div>
  );
}
