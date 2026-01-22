'use client';

import { HeaderContainer, HeaderContent, Logo, Nav, Actions } from './Header.styled';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from './Header.theme';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import i18n from '@/i18n/client';

export const Header = () => {
  const { t } = useTranslation();
  const { locale } = useParams();
  const currentLocale = (i18n.resolvedLanguage || locale || 'en') as string;

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to={`/${currentLocale}`} className="flex items-center justify-center">
            {t('header.title')}
          </Link>
        </Logo>

        <Nav>
          <Navigation className="mr-4" />
          <Actions>
            <LanguageSwitcher />
            <ThemeToggle />
          </Actions>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
