"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NetworkTopology } from "./NetworkTopology";
import { resumeFiles } from "@/lib/links";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const resumePath = locale === "fr" ? resumeFiles.fr : resumeFiles.en;

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-cyan/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-amber/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
            ENIG · Communications & Networks
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {t("name")}
          </h1>
          <p className="mt-4 font-display text-xl font-medium leading-snug text-accent-cyan sm:text-2xl">
            {t("tagline")}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            {t("subhead")}
          </p>
          <p className="mt-4 font-mono text-xs leading-relaxed text-text-muted/90">
            {t("credentials")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">{t("ctaProjects")}</Button>
            <Button href={resumePath} variant="secondary" download>
              <Download size={16} className="mr-2" />
              {t("ctaResume")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative flex h-48 w-48 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-bg-elevated shadow-[0_0_60px_rgba(34,211,238,0.12)] sm:h-56 sm:w-56">
            <span className="font-display text-5xl font-bold text-accent-cyan/80 sm:text-6xl">
              HS
            </span>
            <div className="absolute -bottom-3 rounded-full border border-border bg-bg-primary px-3 py-1 font-mono text-[10px] text-text-muted">
              {t("photoSoon")}
            </div>
          </div>
          <NetworkTopology />
        </motion.div>
      </div>

      <div className="relative flex justify-center pb-8">
        <a
          href="#projects"
          className="flex flex-col items-center gap-1 text-text-muted transition-colors hover:text-accent-cyan"
          aria-label={t("scrollProjects")}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">
            {t("scrollProjects")}
          </span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
