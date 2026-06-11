import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n, { locales, type Locale } from '@/i18n/client';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from './Header.theme';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  const { t } = useTranslation();
  const { locale } = useParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const currentLocale = (i18n.resolvedLanguage || locale || 'en') as Locale;
  const homePath = `/${locales.includes(currentLocale) ? currentLocale : 'en'}`;

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 10);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b transition-colors duration-200',
        isScrolled
          ? 'border-border bg-background/85 backdrop-blur-xl'
          : 'border-transparent bg-background/70 backdrop-blur-xl',
      ].join(' ')}
    >
      <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between gap-4 px-6">
        <Link to={homePath} className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[14px] bg-foreground text-[12px] font-semibold text-background shadow-card">
            KV
          </span>
          <span className="hidden text-[15px] font-semibold tracking-[-0.02em] text-foreground sm:block">
            {t('header.title')}
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-7 text-[14px] text-muted-foreground md:flex">
            <Navigation />
          </nav>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
