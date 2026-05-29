import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

type Props = { params: Promise<{ locale: string }> };

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  return (
    <>
      <PageHeader title={t("hubTitle")} subtitle={t("hubSubtitle")} />
      <ProjectsGrid />
    </>
  );
}
