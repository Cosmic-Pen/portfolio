"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { NetworkTopology } from "./NetworkTopology";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
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
          <p className="mt-4 font-display text-xl font-medium text-accent-cyan sm:text-2xl">
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
            <Button href="/resume" variant="secondary">
              {t("ctaResume")}
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <NetworkTopology />
        </motion.div>
      </div>
    </section>
  );
}
