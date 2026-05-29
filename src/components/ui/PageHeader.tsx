type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-bg-elevated/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
