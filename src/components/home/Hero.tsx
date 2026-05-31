"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SignalMap } from "./SignalMap";
import { resumeFiles } from "@/lib/links";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const resumePath = locale === "fr" ? resumeFiles.fr : resumeFiles.en;

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-bg absolute inset-0 opacity-15" />
      <div
        className="pointer-events-none absolute -right-48 -top-24 h-80 w-80 rounded-full bg-sky-400/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
            ENIG · Communications & Networks
          </p>

          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            {t("name")}
          </h1>

          <p className="mt-5 font-display text-xl font-medium leading-snug text-text-primary sm:text-2xl">
            Networks that{" "}
            <span className="text-sky-400">connect.</span>{" "}
            Systems that sense and decide.
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
            {t("subhead")}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/projects" variant="secondary">
              {t("ctaProjects")}
            </Button>
            <Button href={resumePath} download>
              <Download size={15} className="mr-2" />
              {t("ctaResume")}
            </Button>
          </div>
        </motion.div>

        {/* Right: photo + signal map */}
        <motion.div
          className="flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <div className="relative rotate-1">
  <div className="relative h-64 w-52 overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl sm:h-72 sm:w-56">
    <Image
      src="/images/profile.png"
      alt={t("name")}
      fill
      priority
      sizes="(max-width: 640px) 208px, 224px"
      className="object-cover object-[center_20%] brightness-110 contrast-105 saturate-105"
    />
    {/* Subtle inner vignette for depth */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
  </div>
</div>

          <SignalMap />
        </motion.div>
      </div>

      <div className="relative flex justify-center pb-8">
        
          <a href="#projects"
          className="flex flex-col items-center gap-1.5 text-text-muted transition-colors hover:text-sky-400"
          aria-label={t("scrollProjects")}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">
            {t("scrollProjects")}
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
      
    </section>
  )
}