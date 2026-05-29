type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
