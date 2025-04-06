'use client';

import { HeaderContainer, HeaderContent, Logo, Nav, Actions } from './Header.styled';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from './Header.theme';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link href="/" className="flex items-center justify-center">
            {t('title')}
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
