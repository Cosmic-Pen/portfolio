"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skillGroups.map(({ key, skills }, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-xl border border-border bg-bg-elevated p-5"
            >
              {/* Category label — muted, not amber */}
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                {t(`groups.${key}`)}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "rounded-md border border-border bg-bg-primary px-3 py-1 font-mono text-xs text-text-muted",
                      "transition-all duration-200 hover:border-sky-400/40 hover:text-sky-400",
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}