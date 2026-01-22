'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github } from 'lucide-react';
import {
  FooterContainer,
  FooterContent,
  FooterSocial,
  FooterSocialLink,
  FooterBottom,
  FooterCopyright,
  FooterLinks,
} from './Footer.styled';
import { PolicyDialog } from './PolicyDialog/PolicyDialog';
import { Privacy } from './Privacy';
import { Terms } from './Terms';
import { Navigation } from '../Navigation/Navigation';

export const Footer = () => {
  const { t } = useTranslation();
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
            &copy; {currentYear} Konstantin Vanichkin. {t('footer.rights')}
          </FooterCopyright>
          <FooterLinks>
            <PolicyDialog
              isOpen={isPrivacyOpen}
              onOpenChange={setIsPrivacyOpen}
              title={t('footer.privacy')}
            >
              <Privacy />
            </PolicyDialog>

            <PolicyDialog
              isOpen={isTermsOpen}
              onOpenChange={setIsTermsOpen}
              title={t('footer.terms')}
            >
              <Terms />
            </PolicyDialog>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};
