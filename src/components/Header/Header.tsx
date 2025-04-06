'use client';

import { HeaderContainer, HeaderContent, Logo, Nav } from './Header.styled';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from './Header.theme';
import { useTranslations } from 'next-intl';

export const Header = () => {
  console.log('Header :>> ', Header);

  const t = useTranslations('header');

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <span>{t('title')}</span>
        </Logo>
        <Nav>
          <LanguageSwitcher />
          <ThemeToggle />
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
