"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { socialLinks } from "@/lib/links";
import {
  IconMail,
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconFacebook,
} from "@/components/ui/SocialIcons";

export function ContactBand() {
  const contact = useTranslations("contact");
  const about = useTranslations("about");

  const channels = [
    { href: socialLinks.email, label: about("email"), icon: IconMail },
    { href: socialLinks.linkedin, label: about("linkedin"), icon: IconLinkedin },
    { href: socialLinks.github, label: about("github"), icon: IconGithub },
    { href: socialLinks.instagram, label: about("instagram"), icon: IconInstagram },
    { href: socialLinks.facebook, label: about("facebook"), icon: IconFacebook },
  ];

  return (
    <section className="border-t border-border bg-bg-elevated/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeader
          eyebrow={contact("eyebrow")}
          title={contact("title")}
          subtitle={about("contactCta")}
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated px-4 py-3.5 text-sm text-text-muted transition-all hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:text-accent-cyan"
            >
              <Icon size={18} className="shrink-0 text-accent-cyan" />
              {label}
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${socialLinks.email.replace("mailto:", "")}`} external>
            {contact("emailCta")}
          </Button>
          <Button href="/about" variant="secondary">
            {about("contactTitle")}
          </Button>
        </div>
      </div>
    </section>
  );
}
