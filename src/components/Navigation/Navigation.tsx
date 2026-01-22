'use client';

import { useTranslation } from 'react-i18next';
import { NavContainer, NavLink, NavTitle } from './Navigation.styled';

type NavigationProps = {
  variant?: 'header' | 'footer';
  showTitle?: boolean;
  className?: string;
};

export const Navigation = ({ showTitle = false, className = '' }: NavigationProps) => {
  const { t } = useTranslation();

  const navItems = [
    { key: 'home', href: '#' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'consultation', href: '#consultation' },
  ];

  return (
    <NavContainer className={className}>
      {showTitle && <NavTitle>{t('footer.navigation')}</NavTitle>}

      {navItems.map(item => (
        <a key={item.key} href={item.href}>
          <NavLink>{t(`Navigation.${item.key}`)}</NavLink>
        </a>
      ))}
    </NavContainer>
  );
};
