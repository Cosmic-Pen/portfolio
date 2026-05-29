import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { RoboticsSections } from "@/components/projects/RoboticsSections";

type Props = { params: Promise<{ locale: string }> };

export default async function RoboticsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("robotics");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <RoboticsSections />
    </>
  );
}
