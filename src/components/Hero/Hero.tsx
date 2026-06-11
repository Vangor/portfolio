'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
  HeroSection,
  HeroContainer,
  HeroCopy,
  Eyebrow,
  EyebrowDot,
  Title,
  Role,
  Subtitle,
  ContactContainer,
  HeroPortrait,
  PortraitFrame,
  PortraitCaption,
} from './Hero.styled';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroContainer>
        <HeroCopy>
          <Eyebrow>
            <EyebrowDot />
            <span>{t('hero.badge')}</span>
          </Eyebrow>

          <Title>
            <span>Konstantin</span>
            <br />
            <span>Vanichkin</span>
          </Title>

          <Role>
            <span>{t('hero.role.a')}</span>
            <span className="text-muted-foreground">&amp;</span>
            <span>{t('hero.role.b')}</span>
          </Role>

          <Subtitle dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }} />

          <ContactContainer>
            <Button asChild>
              <a href="mailto:hello@4etverg.com">
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
        </HeroCopy>

        <HeroPortrait>
          <PortraitFrame aria-hidden="true" />
          <PortraitCaption>
            <span>{t('hero.loc')}</span>
            <span>/4etverg</span>
          </PortraitCaption>
        </HeroPortrait>
      </HeroContainer>
    </HeroSection>
  );
};
