"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

type Filter = "all" | "development" | "robotics" | "ai";

const skillToFilter: Record<string, Filter | undefined> = {
  Python: "development",
  Django: "development",
  GAN: "ai",
  ESP32: "robotics",
  Arduino: "robotics",
};

export function FeaturedProjects({ skillFilter }: { skillFilter?: string }) {
  const t = useTranslations("projects");
  const common = useTranslations("common");
  const [filter, setFilter] = useState<Filter>("all");

  const activeFilter = skillFilter
    ? (skillToFilter[skillFilter] ?? "all")
    : filter;

  const filtered = useMemo(() => {
    const list = projects.filter((p) => p.featured);
    if (activeFilter === "all") return list;
    if (activeFilter === "development")
      return list.filter((p) => p.category === "development");
    if (activeFilter === "robotics")
      return list.filter((p) => p.category === "robotics");
    return list.filter((p) => p.category === "ai");
  }, [activeFilter]);

  const pills: { id: Filter; label: string }[] = [
    { id: "all", label: t("filterAll") },
    { id: "development", label: t("filterDevelopment") },
    { id: "robotics", label: t("filterRobotics") },
    { id: "ai", label: t("filterAi") },
  ];

  return (
    <section className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              {t("title")}
            </h2>
            <p className="mt-1 text-sm text-text-muted">{t("subtitle")}</p>
          </div>
          <Link href="/projects" className="text-sm text-accent-cyan hover:underline">
            {common("viewAll")} →
          </Link>
        </div>

        {!skillFilter && (
          <div className="mt-6 flex flex-wrap gap-2" role="tablist">
            {pills.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                onClick={() => setFilter(id)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  filter === id
                    ? "border-accent-cyan bg-accent-cyan/10 text-accent-cyan"
                    : "border-border text-text-muted hover:text-text-primary",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
