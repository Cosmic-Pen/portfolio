import { useTranslations } from "next-intl";
import { ImageIcon } from "lucide-react";

type EngagementCardProps = {
  id: string;
};

export function EngagementCard({ id }: EngagementCardProps) {
  const t = useTranslations("engagements");
  const item = t.raw(`items.${id}`) as {
    title: string;
    org: string;
    t1: string;
    t2: string;
    t3?: string;
  };

  const tasks = [item.t1, item.t2, item.t3].filter(Boolean);

  return (
    <article className="rounded-xl border border-border bg-bg-elevated overflow-hidden">
      <div className="grid gap-0 md:grid-cols-5">
        <div className="flex min-h-[140px] items-center justify-center border-b border-border bg-bg-primary md:col-span-2 md:border-b-0 md:border-r">
          <div className="text-center text-text-muted">
            <ImageIcon className="mx-auto mb-2 opacity-50" size={32} />
            <p className="font-mono text-[10px]">{t("mediaPlaceholder")}</p>
          </div>
        </div>
        <div className="p-6 md:col-span-3">
          <h2 className="font-display text-lg font-semibold text-text-primary">
            {item.title}
          </h2>
          <p className="mt-1 text-sm text-accent-amber">{item.org}</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-text-muted">
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
