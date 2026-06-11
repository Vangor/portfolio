import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import i18n, { locales, type Locale } from '@/i18n/client';

const resolveLocale = (): Locale => {
  const locale = i18n.resolvedLanguage || i18n.language;
  return locales.includes(locale as Locale) ? (locale as Locale) : 'en';
};

export const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLocale, setCurrentLocale] = useState<Locale>(resolveLocale);

  useEffect(() => {
    const handler = () => setCurrentLocale(resolveLocale());
    i18n.on('languageChanged', handler);
    return () => i18n.off('languageChanged', handler);
  }, []);

  const switchLanguage = (nextLocale: Locale) => {
    const pathname = location.pathname;
    const withoutLocale = pathname.replace(/^\/(en|ru|es)(?=\/|$)/, '');
    const normalized = withoutLocale === '' ? '/' : withoutLocale;
    navigate(`/${nextLocale}${normalized}`);
  };

  return (
    <div className="inline-flex rounded-full border border-border/80 bg-background p-1" aria-label="Language switcher">
      {locales.map(locale => {
        const active = currentLocale === locale;
        return (
          <button
            key={locale}
            type="button"
            aria-pressed={active}
            onClick={() => switchLanguage(locale)}
            className={[
              'h-9 rounded-full px-3.5 text-[12px] font-medium tracking-[0.14em] transition-all',
              active ? 'bg-foreground text-background shadow-sm' : 'text-muted-foreground hover:text-foreground',
            ].join(' ')}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
