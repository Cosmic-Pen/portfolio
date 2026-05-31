import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { CertificationsStrip } from "@/components/home/CertificationsStrip";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { DualPath } from "@/components/home/DualPath";
import { SkillsByCategory } from "@/components/home/SkillsByCategory";
import { EngagementsTeaser } from "@/components/home/EngagementsTeaser";
import { ContactBand } from "@/components/home/ContactBand";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <CertificationsStrip />
      <AboutSnapshot />
      <DualPath />
      <SkillsByCategory />
      <EngagementsTeaser />
      <ContactBand />
    </>
  );
}