"use client";

import { useTranslations } from "next-intl";
import { socialLinks } from "@/lib/links";
import {
  IconMail,
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconFacebook,
  IconAward,
} from "@/components/ui/SocialIcons";

export function Footer() {
  const t = useTranslations("footer");
  const about = useTranslations("about");

  const links = [
    { href: socialLinks.email, label: about("email"), icon: IconMail },
    { href: socialLinks.linkedin, label: about("linkedin"), icon: IconLinkedin },
    { href: socialLinks.github, label: about("github"), icon: IconGithub },
    { href: socialLinks.instagram, label: about("instagram"), icon: IconInstagram },
    { href: socialLinks.facebook, label: about("facebook"), icon: IconFacebook },
    { href: socialLinks.credly, label: about("credly"), icon: IconAward },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-bg-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-text-primary">
            {t("built")}
          </p>
          <p className="mt-1 text-sm text-text-muted">{t("school")}</p>
          <p className="mt-3 flex items-center gap-2 font-mono text-xs text-accent-green">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
            </span>
            {t("status")}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-text-muted transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
              aria-label={label}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
