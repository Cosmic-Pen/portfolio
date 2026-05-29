"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const skillGroups = [
  {
    key: "networks",
    skills: ["CCNA", "Linux", "NetScan", "ADSL/VDSL"],
  },
  {
    key: "development",
    skills: ["Python", "Django", "SQL", "Node.js", "React", "WebSockets"],
  },
  {
    key: "embedded",
    skills: ["ESP32", "Arduino", "Raspberry Pi", "IoT"],
  },
  {
    key: "ai",
    skills: ["Machine Learning", "GAN", "Computer Vision", "OpenCV"],
  },
] as const;

export function SkillsByCategory() {
  const t = useTranslations("skillsGrouped");

  return (
    <section className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map(({ key, skills }) => (
            <article
              key={key}
              className="rounded-xl border border-border bg-bg-elevated p-5"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent-amber">
                {t(`groups.${key}`)}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "rounded-lg border border-border bg-bg-primary px-3 py-1.5 font-mono text-xs text-text-muted",
                      "transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan",
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
