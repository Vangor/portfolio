'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FooterContainer, FooterContent, FooterBottom, FooterLinks, FooterLink } from './Footer.styled';
import { PolicyDialog } from './Footer.PolicyDialog';
import { Privacy } from './Footer.Privacy';
import { Terms } from './Footer.Terms';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterBottom>
          <span>© {currentYear} Konstantin Vanichkin</span>
          <span>{t('footer.tagline')}</span>
        </FooterBottom>

        <FooterLinks>
          <PolicyDialog
            isOpen={isPrivacyOpen}
            onOpenChange={setIsPrivacyOpen}
            title={t('footer.privacy')}
          >
            <Privacy />
          </PolicyDialog>

          <PolicyDialog isOpen={isTermsOpen} onOpenChange={setIsTermsOpen} title={t('footer.terms')}>
            <Terms />
          </PolicyDialog>

          <FooterLink type="button" onClick={scrollToTop}>
            {t('footer.top')}
          </FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};
