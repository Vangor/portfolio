'use client';

import { useTranslation } from 'react-i18next';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ConsultationSection,
  ConsultationContainer,
  SectionTitle,
  SectionSubtitle,
} from './Consultation.styled';

export const Consultation = () => {
  const { t } = useTranslation();

  return (
    <ConsultationSection id="consultation">
      <ConsultationContainer>
        <SectionTitle>{t('consultation.title')}</SectionTitle>
        <SectionSubtitle>{t('consultation.subtitle')}</SectionSubtitle>

        <p className="text-muted-foreground text-center max-w-xl mb-10">
          {t('consultation.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="https://t.me/con_van" target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-4 w-4" />
              {t('consultation.telegram')}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:contact@vanichk.in">
              <Mail className="mr-2 h-4 w-4" />
              {t('consultation.email')}
            </a>
          </Button>
        </div>
      </ConsultationContainer>
    </ConsultationSection>
  );
};
