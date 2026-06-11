import { useTranslation } from 'react-i18next';

const order = ['4etverg', 'career-break', 'nda-igaming', 'pipedrive', 'accenture'] as const;

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="border-t border-border/80">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <div data-reveal className="mb-10 opacity-0 translate-y-6 transition-all duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)]">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
            {t('experience.kicker')}
          </p>
          <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.03em]">
            {t('experience.title')}
          </h2>
        </div>

        <div className="space-y-0">
          {order.map(key => (
            <article
              key={key}
              data-reveal
              className="grid gap-6 border-t border-border/80 py-8 opacity-0 translate-y-6 transition-all duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] lg:grid-cols-[220px_1fr]"
            >
              <aside className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-[18px] font-medium tracking-[-0.02em]">{t(`experience.${key}.company`)}</h3>
                  {key === '4etverg' ? (
                    <span className="rounded-full border border-primary px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-primary">
                      {t('experience.current')}
                    </span>
                  ) : null}
                </div>
                <p className="font-mono text-[13px] text-muted-foreground">{t(`experience.${key}.period`)}</p>
                <p className="font-mono text-[13px] text-muted-foreground">{t(`experience.${key}.location`)}</p>
              </aside>

              <div className="space-y-4">
                <h4 className="text-[18px] font-medium">{t(`experience.${key}.position`)}</h4>
                <ul className="space-y-3 text-[16px] leading-[1.65] text-foreground/85">
                  {(t(`experience.${key}.achievements`, { returnObjects: true }) as string[]).map(item => (
                    <li key={item} className="max-w-[70ch]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
