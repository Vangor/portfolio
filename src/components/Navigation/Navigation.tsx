'use client';

import { useTranslation } from 'react-i18next';
import { NavContainer, NavLink, NavTitle } from './Navigation.styled';

type NavigationProps = {
  showTitle?: boolean;
  className?: string;
};

export const Navigation = ({ showTitle = false, className = '' }: NavigationProps) => {
  const { t } = useTranslation();

  const navItems = [
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'skills', href: '#skills' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <NavContainer className={className}>
      {showTitle ? <NavTitle>{t('footer.navigation')}</NavTitle> : null}

      {navItems.map(item => (
        <a key={item.key} href={item.href}>
          <NavLink>{t(`nav.${item.key}`)}</NavLink>
        </a>
      ))}
    </NavContainer>
  );
};
