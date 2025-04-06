'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Linkedin, Github } from 'lucide-react';
import {
  FooterContainer,
  FooterContent,
  FooterSocial,
  FooterSocialLink,
  FooterBottom,
  FooterCopyright,
} from './Footer.styled';
import { PolicyDialog } from './PolicyDialog/PolicyDialog';
import { Privacy } from './Privacy';
import { Terms } from './Terms';
import { Navigation } from '../Navigation/Navigation';

export const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <FooterContainer>
      <FooterContent>
        <Navigation showTitle />

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
            href="https://github.com/vangor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </FooterSocialLink>
        </FooterSocial>
      </FooterContent>

      <FooterContent>
        <FooterBottom>
          <FooterCopyright>
            &copy; {currentYear} Konstantin Vanichkin. {t('rights')}
          </FooterCopyright>
          <PolicyDialog isOpen={isPrivacyOpen} onOpenChange={setIsPrivacyOpen} title={t('privacy')}>
            <Privacy />
          </PolicyDialog>

          <PolicyDialog isOpen={isTermsOpen} onOpenChange={setIsTermsOpen} title={t('terms')}>
            <Terms />
          </PolicyDialog>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};
