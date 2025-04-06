'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales } from '../../../middleware';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
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

export const LanguageSwitcher = () => {
  const t = useTranslations('Index');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Handle switching the language
  const switchLanguage = (newLocale: string) => {
    // Get path without locale
    let newPath = pathname;

    // Remove current locale from path
    locales.forEach(locale => {
      if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
        newPath = pathname.replace(`/${locale}`, '');
      }
    });

    // Handle empty path
    if (newPath === '') newPath = '/';

    // Add new locale to path unless it's the default ('en')
    const targetPath = newLocale === 'en' ? newPath : `/${newLocale}${newPath}`;

    // Navigate to the new page
    router.push(targetPath);
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
            <DropdownMenuItem key={locale} onClick={() => switchLanguage(locale)}>
              <LanguageItemContainer>
                <FlagIcon>{languageFlags[locale]}</FlagIcon>
                <LanguageText>
                  {locale === 'en' ? 'English' : locale === 'ru' ? 'Русский' : 'Español'}
                </LanguageText>
                {currentLocale === locale && (
                  <CheckIconContainer>
                    <Check className="h-4 w-4" />
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
