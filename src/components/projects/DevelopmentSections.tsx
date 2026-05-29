"use client";

import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import { ProjectSection } from "./ProjectSection";

const devIds = ["gan-sr", "social-network", "chatbot", "realtime-chat"];

export function DevelopmentSections() {
  const dev = useTranslations("development");
  const list = projects.filter((p) => devIds.includes(p.id));

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6">
      {list.map((project) => (
        <ProjectSection
          key={project.id}
          project={project}
          comingSoonLabel={dev("comingSoon")}
        />
      ))}
    </div>
  );
}
