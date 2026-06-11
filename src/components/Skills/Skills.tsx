import { useTranslation } from 'react-i18next';

const groups = [
  { key: 'g1', items: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6'] },
  { key: 'g2', items: ['a1', 'a2', 'a3', 'a4', 'a5'] },
  { key: 'g3', items: ['e1', 'e2', 'TypeScript', 'PostgreSQL', 'Kubernetes', 'Observability'] },
] as const;

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="border-t border-border/80">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <div data-reveal className="mb-10 opacity-0 translate-y-6 transition-all duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)]">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
            {t('skills.kicker')}
          </p>
          <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.03em]">
            {t('skills.title')}
          </h2>
        </div>

        <div className="space-y-8">
          {groups.map(group => (
            <div
              key={group.key}
              data-reveal
              className="grid gap-4 border-t border-border/80 pt-6 opacity-0 translate-y-6 transition-all duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] lg:grid-cols-[220px_1fr]"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                {t(`skills.${group.key}`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-4 py-2 font-mono text-[13px] text-foreground"
                  >
                    {item.length === 2 && item[0] !== item[0].toUpperCase() ? t(`skills.${item}`) : item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
