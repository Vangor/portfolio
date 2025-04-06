'use client';

import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { HeroSection, HeroContainer, Title, Subtitle, ContactContainer } from './Hero.styled';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('hero');

  return (
    <HeroSection>
      <HeroContainer>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <ContactContainer>
          <Button variant="outline" asChild>
            <Link href="mailto:konstantin@vanichk.in">
              <Mail className="mr-2 h-4 w-4" />
              {t('contact')}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="https://www.linkedin.com/in/konstantinvan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              {t('linkedin')}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/Vangor" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t('github')}
            </Link>
          </Button>
        </ContactContainer>
      </HeroContainer>
    </HeroSection>
  );
};
