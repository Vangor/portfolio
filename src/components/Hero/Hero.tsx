'use client';

import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';
import { HeroSection, HeroContainer, Title, Subtitle, ContactContainer } from './Hero.styled';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroContainer>
        <Title>{t('hero.title')}</Title>
        <Subtitle>{t('hero.subtitle')}</Subtitle>
        <ContactContainer>
          <Button variant="outline" asChild>
            <a href="mailto:contact@vanichk.in">
              <Mail className="mr-2 h-4 w-4" />
              {t('hero.contact')}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://www.linkedin.com/in/konstantinvan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              {t('hero.linkedin')}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/Vangor" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t('hero.github')}
            </a>
          </Button>
        </ContactContainer>
      </HeroContainer>
    </HeroSection>
  );
};
