import { useTranslations } from "next-intl";
import type { Project } from "@/data/projects";

type ProjectSectionProps = {
  project: Project;
  comingSoonLabel: string;
};

export function ProjectSection({
  project,
  comingSoonLabel,
}: ProjectSectionProps) {
  const t = useTranslations("projects");
  const item = t.raw(`items.${project.id}`) as {
    title: string;
    outcome: string;
  };
  const roleLabel = t(
    project.roleKey as "role.solo" | "role.team2" | "role.teamLead",
  );

  return (
    <section
      id={project.anchor}
      className="scroll-mt-24 rounded-xl border border-border bg-bg-elevated p-6 md:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
            {item.title}
          </h2>
          <p className="mt-1 text-sm text-text-muted">{roleLabel}</p>
        </div>
        <span className="font-mono text-[10px] text-accent-amber">
          {t("status.comingSoon")}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-text-muted">{item.outcome}</p>
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
      <p className="mt-6 rounded-lg border border-dashed border-border bg-bg-primary px-4 py-3 font-mono text-xs text-text-muted">
        {comingSoonLabel}
      </p>
    </section>
  );
}
