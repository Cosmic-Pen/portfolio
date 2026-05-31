"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navKeys = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/projects/development", key: "development" },
  { href: "/projects/robotics-iot", key: "roboticsIot" },
  { href: "/experience", key: "experience" },
  { href: "/engagements", key: "engagements" },
  { href: "/about", key: "about" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/projects") return pathname === "/projects";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg-primary/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-cyan/30 bg-bg-elevated font-mono text-sm font-bold text-accent-cyan">
            HS
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-text-primary sm:block">
            Hedhli Saber
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navKeys.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className={cn(
                "relative rounded-md px-2.5 py-2 text-sm transition-colors",
                isActive(href)
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-primary",
              )}
            >
              {t(key)}
              {/* Active underline indicator */}
              {isActive(href) && (
                <span className="absolute bottom-0 left-1/2 h-px w-4 -translate-x-1/2 rounded-full bg-sky-400" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <Button href="/resume" variant="secondary" className="hidden sm:inline-flex">
            {t("resume")}
          </Button>
          <button
            type="button"
            className="rounded-lg border border-border p-2 text-text-muted lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-t border-border bg-bg-elevated lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {navKeys.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-3 py-2.5 text-sm transition-colors",
                isActive(href)
                  ? "bg-bg-primary text-sky-400"
                  : "text-text-muted hover:bg-bg-primary hover:text-text-primary",
              )}
            >
              {t(key)}
            </Link>
          ))}
          <Link
            href="/resume"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2.5 text-sm text-accent-amber"
          >
            {t("resume")}
          </Link>
        </nav>
      </div>
    </header>
  );
}