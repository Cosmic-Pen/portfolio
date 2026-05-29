import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { EngagementCard } from "@/components/engagements/EngagementCard";
import { engagements } from "@/data/engagements";

type Props = { params: Promise<{ locale: string }> };

export default async function EngagementsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("engagements");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6">
        {engagements.map(({ id }) => (
          <EngagementCard key={id} id={id} />
        ))}
      </div>
    </>
  );
}
