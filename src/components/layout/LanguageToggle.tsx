"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: "en" | "fr") => {
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className="flex rounded-lg border border-border bg-bg-elevated p-0.5 text-xs font-medium"
      role="group"
      aria-label="Language"
    >
      {(["en", "fr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          className={cn(
            "rounded-md px-2.5 py-1 uppercase transition-colors",
            locale === code
              ? "bg-accent-cyan/15 text-accent-cyan"
              : "text-text-muted hover:text-text-primary",
          )}
          aria-pressed={locale === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
