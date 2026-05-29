"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const categoryColors: Record<string, string> = {
  development: "text-accent-cyan",
  robotics: "text-accent-amber",
  ai: "text-accent-green",
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const t = useTranslations("projects");
  const item = t.raw(`items.${project.id}`) as {
    title: string;
    outcome: string;
  };

  const roleLabel = t(
    project.roleKey as "role.solo" | "role.team2" | "role.teamLead",
  );
  const status = t(project.statusKey as "status.comingSoon");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/30 hover:shadow-[0_12px_40px_rgba(34,211,238,0.08)]"
    >
      <div className="flex h-32 items-center justify-center border-b border-border bg-gradient-to-br from-bg-primary to-bg-elevated grid-bg">
        <span
          className={cn(
            "font-mono text-xs uppercase tracking-wider",
            categoryColors[project.category] ?? "text-text-muted",
          )}
        >
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-text-primary">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
          {item.outcome}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-text-muted">{roleLabel}</p>
        <p className="mt-1 font-mono text-[10px] text-accent-amber">{status}</p>
        <Link
          href={project.link}
          className="mt-4 text-sm font-medium text-accent-cyan hover:underline"
        >
          {t("viewCaseStudy")} →
        </Link>
      </div>
    </motion.article>
  );
}
