'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { NavContainer, NavLink, NavTitle } from './Navigation.styled';

type NavigationProps = {
  variant?: 'header' | 'footer';
  showTitle?: boolean;
  className?: string;
};

export const Navigation = ({ showTitle = false, className = '' }: NavigationProps) => {
  const nav = useTranslations('Navigation');
  const t = useTranslations('footer');

  const navItems = [
    { key: 'home', href: '#' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'consultation', href: '#consultation' },
  ];

  return (
    <NavContainer className={className}>
      {showTitle && <NavTitle>{t('navigation')}</NavTitle>}

      {navItems.map(item => (
        <Link key={item.key} href={item.href} legacyBehavior passHref>
          <NavLink>{nav(item.key)}</NavLink>
        </Link>
      ))}
    </NavContainer>
  );
};
