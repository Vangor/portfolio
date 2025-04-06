'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLogo,
  FooterTagline,
  FooterNav,
  FooterNavTitle,
  FooterNavLink,
  FooterSocial,
  FooterSocialLink,
  FooterBottom,
  FooterCopyright,
  FooterLinks,
  FooterBottomLink,
} from './Footer.styled';
import { PolicyDialog } from './PolicyDialog/PolicyDialog';
import { Privacy } from './Privacy';
import { Terms } from './Terms';

export const Footer = () => {
  const t = useTranslations('footer');
  const nav = useTranslations('Navigation');
  const currentYear = new Date().getFullYear();

  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>Konstantin Vanichkin</FooterLogo>
          <FooterTagline>{t('tagline')}</FooterTagline>
          <FooterSocial>
            <FooterSocialLink href="mailto:contact@vanichk.in" aria-label="Email">
              <Mail className="h-5 w-5" />
            </FooterSocialLink>
            <FooterSocialLink
              href="https://www.linkedin.com/in/konstantinvan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </FooterSocialLink>
            <FooterSocialLink
              href="https://github.com/vanichols"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </FooterSocialLink>
          </FooterSocial>
        </FooterSection>

        <FooterSection>
          <FooterNavTitle>{t('navigation')}</FooterNavTitle>
          <FooterNav>
            <Link href="#" legacyBehavior passHref>
              <FooterNavLink>{nav('home')}</FooterNavLink>
            </Link>
            <Link href="#experience" legacyBehavior passHref>
              <FooterNavLink>{nav('experience')}</FooterNavLink>
            </Link>
            <Link href="#projects" legacyBehavior passHref>
              <FooterNavLink>{nav('projects')}</FooterNavLink>
            </Link>
            <Link href="#consultation" legacyBehavior passHref>
              <FooterNavLink>{nav('consultation')}</FooterNavLink>
            </Link>
          </FooterNav>
        </FooterSection>
      </FooterContent>

      <FooterContent>
        <FooterBottom>
          <FooterCopyright>
            &copy; {currentYear} Konstantin Vanichkin. {t('rights')}
          </FooterCopyright>
          <FooterLinks>
            <PolicyDialog
              isOpen={isPrivacyOpen}
              onOpenChange={setIsPrivacyOpen}
              title={t('privacy')}
            >
              <Privacy />
            </PolicyDialog>
            <PolicyDialog isOpen={isTermsOpen} onOpenChange={setIsTermsOpen} title={t('terms')}>
              <Terms />
            </PolicyDialog>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};
