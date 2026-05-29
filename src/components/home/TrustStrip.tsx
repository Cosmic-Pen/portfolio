import { Network, Bot, Code2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function TrustStrip() {
  const t = useTranslations("trust");

  const items = [
    { icon: Network, text: t("ccna") },
    { icon: Bot, text: t("enigrobots") },
    { icon: Code2, text: t("stack") },
  ];

  return (
    <section className="border-b border-border bg-bg-elevated/50">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3 sm:px-6">
        {items.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-start gap-3 rounded-lg border border-border/60 bg-bg-primary/50 px-4 py-3"
          >
            <Icon className="mt-0.5 shrink-0 text-accent-amber" size={18} />
            <p className="text-sm text-text-muted">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
