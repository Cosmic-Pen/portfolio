"use client";

import { useTranslations } from "next-intl";
import { Award, Network, Cpu, Brain } from "lucide-react";
import { socialLinks } from "@/lib/links";

const badges: {
  key: "ccna1" | "ccna2" | "ccna3" | "python" | "django" | "credly";
  icon: typeof Network;
  href?: string;
}[] = [
  { key: "ccna1", icon: Network },
  { key: "ccna2", icon: Network },
  { key: "ccna3", icon: Network },
  { key: "python", icon: Brain },
  { key: "django", icon: Cpu },
  { key: "credly", icon: Award, href: socialLinks.credly },
];

export function CertificationsStrip() {
  const t = useTranslations("certs");

  return (
    <section className="border-b border-border bg-bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-text-muted">
          {t("label")}
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {badges.map(({ key, icon: Icon, href }) => {
            const label = t(key);
            const className =
              "flex shrink-0 items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-2 text-xs text-text-muted transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan";

            if (href) {
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  <Icon size={14} className="text-accent-amber" />
                  {label}
                </a>
              );
            }

            return (
              <span key={key} className={className}>
                <Icon size={14} className="text-accent-amber" />
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
