'use client';

import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n/client';
import { HeaderContainer, HeaderContent, Logo, Nav, Actions } from './Header.styled';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from './Header.theme';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  const { t } = useTranslation();
  const { locale } = useParams();
  const currentLocale = (i18n.resolvedLanguage || locale || 'en') as string;

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to={`/${currentLocale}`} className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-foreground text-[12px] font-medium text-background shadow-[0_1px_2px_rgba(20,22,26,0.08)]">
              KV
            </span>
            <span className="text-base font-semibold tracking-[-0.02em] text-foreground">
              {t('header.title')}
            </span>
          </Link>
        </Logo>

        <Nav>
          <Navigation />
        </Nav>

        <Actions>
          <LanguageSwitcher />
          <ThemeToggle />
        </Actions>
      </HeaderContent>
    </HeaderContainer>
  );
};
