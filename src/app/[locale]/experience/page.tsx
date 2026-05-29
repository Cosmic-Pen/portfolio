import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ locale: string }> };

export default async function ExperiencePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("experience");
  const nav = await getTranslations("nav");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-xl border border-accent-cyan/30 bg-bg-elevated p-6">
          <p className="text-sm text-text-muted">
            {locale === "fr"
              ? "Pour les rôles en clubs et événements, voir la page Engagements."
              : "For club and event leadership roles, see the Engagements page."}
          </p>
          <Link
            href="/engagements"
            className="mt-3 inline-block text-sm font-medium text-accent-cyan hover:underline"
          >
            {nav("engagements")} →
          </Link>
        </div>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-muted">
            {t("secondarySection")}
          </h2>
          <article className="mt-4 rounded-xl border border-border bg-bg-elevated p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-text-primary">
                {t("tt.title")}
              </h3>
              <span className="font-mono text-xs text-text-muted">
                {t("tt.period")}
              </span>
            </div>
            <p className="mt-1 text-sm text-accent-amber">{t("tt.company")}</p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-text-muted">
              <li>{t("tt.b1")}</li>
              <li>{t("tt.b2")}</li>
              <li>{t("tt.b3")}</li>
            </ul>
          </article>
        </section>

        <div className="mt-12 text-center">
          <Button href="/resume">{nav("resume")}</Button>
        </div>
      </div>
    </>
  );
}
