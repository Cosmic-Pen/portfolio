import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { resumeFiles } from "@/lib/links";
import { FileDown, ExternalLink } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export default async function ResumePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("resume");

  const files = [
    { locale: "en", label: t("en"), path: resumeFiles.en },
    { locale: "fr", label: t("fr"), path: resumeFiles.fr },
  ];

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {files.map(({ label, path }) => (
            <div
              key={path}
              className="rounded-xl border border-border bg-bg-elevated p-6"
            >
              <h2 className="font-display text-lg font-semibold text-text-primary">
                {label}
              </h2>
              <p className="mt-2 font-mono text-xs text-text-muted">
                {path}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={path}
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-4 py-2.5 text-sm font-medium text-bg-primary hover:brightness-110"
                >
                  <FileDown size={16} />
                  {t("download")}
                </a>
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-text-primary hover:border-accent-cyan/50"
                >
                  <ExternalLink size={16} />
                  {t("open")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
