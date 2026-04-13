'use client';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import i18n, { locales, type Locale } from '@/i18n/client';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Check, Globe } from 'lucide-react';
import {
  LanguageContainer,
  FlagIcon,
  LanguageText,
  LanguageItemContainer,
  CheckIconContainer,
} from './LanguageSwitcher.styled';

// Language flag emojis
const languageFlags: Record<string, string> = {
  en: '🇬🇧',
  ru: '🇷🇺',
  es: '🇪🇸',
};

const resolveLocale = (): Locale => {
  const locale = i18n.resolvedLanguage || i18n.language;
  return locales.includes(locale as Locale) ? (locale as Locale) : 'en';
};

export const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useParams();
  const [currentLocale, setCurrentLocale] = useState<Locale>(resolveLocale);

  useEffect(() => {
    const handler = () => setCurrentLocale(resolveLocale());
    i18n.on('languageChanged', handler);
    return () => i18n.off('languageChanged', handler);
  }, []);

  // Handle switching the language
  const switchLanguage = (newLocale: string) => {
    const pathname = location.pathname;
    const withoutLocale = pathname.replace(/^\/(en|ru|es)(?=\/|$)/, '');
    const normalized = withoutLocale === '' ? '/' : withoutLocale;
    navigate(`/${newLocale}${normalized}`);
  };

  return (
    <LanguageContainer>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Switch language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {locales.map(locale => (
            <DropdownMenuItem
              key={locale}
              onClick={() => switchLanguage(locale)}
              className={cn(
                currentLocale === locale &&
                  'bg-accent text-accent-foreground focus:bg-accent focus:text-accent-foreground'
              )}
            >
              <LanguageItemContainer>
                <FlagIcon>{languageFlags[locale]}</FlagIcon>
                <LanguageText>
                  {locale === 'en' ? 'English' : locale === 'ru' ? 'Русский' : 'Español'}
                </LanguageText>
                {currentLocale === locale && (
                  <CheckIconContainer>
                    <Check className="h-4 w-4 text-primary" />
                  </CheckIconContainer>
                )}
              </LanguageItemContainer>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </LanguageContainer>
  );
};
