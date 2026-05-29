import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { DualPath } from "@/components/home/DualPath";
import { SkillFilter } from "@/components/home/SkillFilter";
import { EngagementsTeaser } from "@/components/home/EngagementsTeaser";
import { ContactBand } from "@/components/home/ContactBand";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustStrip />
      <DualPath />
      <SkillFilter />
      <EngagementsTeaser />
      <ContactBand />
    </>
  );
}
