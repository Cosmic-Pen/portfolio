import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Network, Cpu, Brain } from "lucide-react";

export function AboutSnapshot() {
  const t = useTranslations("aboutSnapshot");

  const pillars = [
    { icon: Network, title: t("p1Title"), desc: t("p1Desc") },
    { icon: Cpu, title: t("p2Title"), desc: t("p2Desc") },
    { icon: Brain, title: t("p3Title"), desc: t("p3Desc") },
  ];

  return (
    <section className="border-b border-border bg-bg-elevated/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-xl border border-border bg-bg-elevated p-6 transition-all hover:-translate-y-1 hover:border-accent-cyan/30 hover:shadow-[0_8px_30px_rgba(34,211,238,0.08)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-accent-cyan/20 bg-bg-primary text-accent-cyan transition-colors group-hover:bg-accent-cyan/10">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
