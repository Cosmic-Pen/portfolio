import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function ContactBand() {
  const contact = useTranslations("contact");
  const about = useTranslations("about");

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-amber">
          {contact("ctaBand")}
        </p>
        <p className="mx-auto mt-4 max-w-lg font-display text-xl text-text-primary">
          {about("contactCta")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/about">{about("contactTitle")}</Button>
          <Button href="/resume" variant="secondary">
            CV
          </Button>
        </div>
      </div>
    </section>
  );
}
