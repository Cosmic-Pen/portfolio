import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Network, Bot, Code2 } from "lucide-react";

export function TrustStrip() {
  const t = useTranslations("trust");

  const items = [
    { icon: Network, text: t("ccna") },
    { icon: Bot, text: t("enigrobots") },
    { icon: Code2, text: t("stack") },
  ];

  return (
    <section className="border-b border-border bg-bg-elevated/50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-bg-primary/50 px-4 py-4 transition-colors hover:border-accent-cyan/30"
            >
              <Icon className="mt-0.5 shrink-0 text-accent-amber" size={18} />
              <p className="text-sm text-text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
