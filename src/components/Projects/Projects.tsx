import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'lingualex',
      title: 'LinguaLex',
      tag: 'AI · Legal tech',
      href: 'https://lingualex.app',
      description: t('projects.lingualex.description'),
    },
    {
      id: 'agent-os',
      title: '4etverg Agent-OS',
      tag: '4etverg · Framework',
      description: t('projects.agent-os.description'),
    },
  ];

  return (
    <section id="projects" className="border-t border-border/80">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <div data-reveal className="mb-10 opacity-0 translate-y-6 transition-all duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)]">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
            {t('projects.kicker')}
          </p>
          <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.03em]">
            {t('projects.title')}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const classes = [
              'group rounded-[20px] border border-border bg-card p-6 transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]',
              'opacity-0 translate-y-6 hover:-translate-y-1 hover:shadow-lift',
              index % 2 === 1 ? 'md:translate-y-6' : '',
            ].join(' ');

            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[18px] font-medium tracking-[-0.02em]">{project.title}</h3>
                    <p className="mt-2 font-mono text-[13px] text-muted-foreground">{project.tag}</p>
                  </div>
                  <span className="rounded-full border border-border-strong p-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-6 max-w-[38ch] text-[16px] leading-[1.65] text-foreground/85">
                  {project.description}
                </p>
                {project.href ? <div className="mt-8 font-mono text-[13px] text-muted-foreground">{t('common.visit')}</div> : null}
              </>
            );

            if (project.href) {
              return (
                <a
                  key={project.id}
                  data-reveal
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={classes}
                >
                  {content}
                </a>
              );
            }

            return (
              <article key={project.id} data-reveal className={classes}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
