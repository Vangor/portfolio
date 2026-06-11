import { Mail, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const contactLinks = [
  { label: 'Telegram', href: 'https://t.me/con_van', meta: '@con_van' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/con_van', meta: 'in/con_van' },
  { label: 'GitHub', href: 'https://github.com/convanichkin', meta: '/convanichkin' },
];

export const Consultation = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="border-t border-border/80">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <div
          data-reveal
          className="grid gap-8 rounded-[20px] border border-border bg-card p-8 opacity-0 translate-y-6 transition-all duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] lg:grid-cols-[1fr_320px]"
        >
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
              {t('contact.kicker')}
            </p>
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.03em]">
              {t('contact.title')}
            </h2>
            <p className="max-w-[60ch] text-[17px] leading-[1.65] text-foreground/85">{t('contact.body')}</p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:hello@4etverg.com"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-[14px] font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              hello@4etverg.com
            </a>

            <div className="rounded-[20px] border border-border bg-background p-4">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    'flex items-center justify-between py-3 text-[14px] transition-colors hover:text-primary',
                    index !== contactLinks.length - 1 ? 'border-b border-border/80' : '',
                  ].join(' ')}
                >
                  <span>{link.label}</span>
                  <span className="flex items-center gap-2 font-mono text-[12px] text-muted-foreground">
                    {link.meta}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
