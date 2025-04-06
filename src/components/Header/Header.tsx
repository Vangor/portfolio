'use client';

import { HeaderContainer, HeaderContent, Logo, Nav } from './Header.styled';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from './Header.theme';
import { useTranslations } from 'next-intl';
import { Link } from 'lucide-react';
import { Mail } from 'lucide-react';

export const Header = () => {
  console.log('Header :>> ', Header);

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
          <LanguageSwitcher />
          <ThemeToggle />
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
