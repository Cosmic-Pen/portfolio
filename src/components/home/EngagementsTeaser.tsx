import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { engagements } from "@/data/engagements";

export function EngagementsTeaser() {
  const t = useTranslations("engagements");
  const common = useTranslations("common");

  const featured = engagements.filter((e) => e.featured).slice(0, 2);

  return (
    <section className="border-t border-border bg-bg-elevated/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            {t("title")}
          </h2>
          <Link href="/engagements" className="text-sm text-accent-cyan hover:underline">
            {common("viewAll")} →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featured.map(({ id }) => {
            const item = t.raw(`items.${id}`) as {
              title: string;
              org: string;
              t1: string;
            };
            return (
              <div
                key={id}
                className="rounded-xl border border-border bg-bg-elevated p-5"
              >
                <h3 className="font-display font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-accent-amber">{item.org}</p>
                <p className="mt-3 text-sm text-text-muted">{item.t1}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
