import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Cpu, Layers } from "lucide-react";

export function DualPath() {
  const t = useTranslations("dualPath");

  const cards = [
    {
      href: "/projects/development",
      icon: Layers,
      title: t("devTitle"),
      desc: t("devDesc"),
      cta: t("devCta"),
      accent: "text-accent-cyan",
    },
    {
      href: "/projects/robotics-iot",
      icon: Cpu,
      title: t("iotTitle"),
      desc: t("iotDesc"),
      cta: t("iotCta"),
      accent: "text-accent-amber",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold text-text-primary">
        {t("title")}
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {cards.map(({ href, icon: Icon, title, desc, cta, accent }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-xl border border-border bg-bg-elevated p-6 transition-all hover:border-accent-cyan/40 hover:glow-cyan"
          >
            <Icon className={`${accent} mb-4`} size={28} />
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{desc}</p>
            <span className="mt-4 inline-block text-sm font-medium text-accent-cyan group-hover:underline">
              {cta} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
