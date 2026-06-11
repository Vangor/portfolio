import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const links = {
  linkedin: 'https://www.linkedin.com/in/konstantinvan/',
  github: 'https://github.com/Vangor',
};

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="border-b border-border/80">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[1.55fr_1fr] lg:items-start lg:gap-16 lg:py-24">
        <div data-reveal className="space-y-8 opacity-0 translate-y-6 transition-all duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)]">
          <div className="flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span>{t('hero.badge')}</span>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-[11ch] text-[clamp(46px,9vw,88px)] font-semibold leading-[0.94] tracking-[-0.05em]">
              <span>Konstantin</span>
              <br />
              <span>Vanichkin</span>
            </h1>
            <p className="flex flex-wrap items-center gap-2 text-[19px] text-muted-foreground">
              <span>{t('hero.role.a')}</span>
              <span className="text-foreground">&amp;</span>
              <span>{t('hero.role.b')}</span>
            </p>
            <p
              className="max-w-[60ch] text-[17px] leading-[1.65] text-foreground/85"
              dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@4etverg.com"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-[14px] font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {t('hero.contact')}
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong bg-background px-5 text-[14px] font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Linkedin className="h-4 w-4" />
              {t('hero.linkedin')}
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong bg-background px-5 text-[14px] font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" />
              {t('hero.github')}
            </a>
          </div>
        </div>

        <div data-reveal className="translate-y-6 opacity-0 transition-all delay-200 duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)]">
          <div className="overflow-hidden rounded-[20px] border border-border bg-card shadow-card">
            <div className="aspect-[4/5] w-full bg-[linear-gradient(180deg,rgba(56,82,214,0.08),rgba(255,255,255,0)_40%),radial-gradient(circle_at_30%_20%,rgba(128,152,255,0.18),transparent_26%),linear-gradient(135deg,#fff,#fafaf7)] dark:bg-[linear-gradient(180deg,rgba(128,152,255,0.08),rgba(0,0,0,0)_40%),radial-gradient(circle_at_30%_20%,rgba(128,152,255,0.2),transparent_26%),linear-gradient(135deg,#141417,#0B0B0D)]" />
          </div>
          <div className="mt-3 flex items-center justify-between text-[13px] text-muted-foreground">
            <span>{t('hero.loc')}</span>
            <span className="font-mono">/4etverg</span>
          </div>
          <div className="mt-6 rounded-[20px] border border-border bg-card p-4 shadow-card">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                  Availability
                </p>
                <p className="mt-2 text-[16px] text-foreground">Work with me</p>
              </div>
              <a href="#contact" className="inline-flex h-10 items-center gap-2 rounded-full border border-border-strong px-4 text-[14px] font-medium">
                <span>Contact</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
