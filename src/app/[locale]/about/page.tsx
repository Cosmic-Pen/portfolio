import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { socialLinks } from "@/lib/links";
import {
  IconMail,
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconFacebook,
  IconAward,
} from "@/components/ui/SocialIcons";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const channels = [
    { href: socialLinks.email, label: t("email"), icon: IconMail },
    { href: socialLinks.linkedin, label: t("linkedin"), icon: IconLinkedin },
    { href: socialLinks.github, label: t("github"), icon: IconGithub },
    { href: socialLinks.instagram, label: t("instagram"), icon: IconInstagram },
    { href: socialLinks.facebook, label: t("facebook"), icon: IconFacebook },
    { href: socialLinks.credly, label: t("credly"), icon: IconAward },
  ];

  return (
    <>
      <PageHeader title={t("title")} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-text-muted">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            {t("contactTitle")}
          </h2>
          <p className="mt-2 text-sm text-text-muted">{t("contactCta")}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated px-4 py-4 transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
              >
                <Icon size={20} className="shrink-0 text-accent-cyan" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
