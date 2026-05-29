import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { DevelopmentSections } from "@/components/projects/DevelopmentSections";

type Props = { params: Promise<{ locale: string }> };

export default async function DevelopmentPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("development");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <DevelopmentSections />
    </>
  );
}
