'use client';

import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  ConsultationSection,
  ConsultationContainer,
  ContactCard,
  SectionHeader,
  Kicker,
  SectionTitle,
  Body,
  CtaRow,
} from './Consultation.styled';

export const Consultation = () => {
  const { t } = useTranslation();

  return (
    <ConsultationSection id="contact">
      <ConsultationContainer>
        <ContactCard>
          <SectionHeader>
            <Kicker>{t('consultation.kicker')}</Kicker>
            <SectionTitle>{t('consultation.title')}</SectionTitle>
          </SectionHeader>

          <Body>{t('consultation.body')}</Body>

          <CtaRow>
            <Button asChild>
              <a href="mailto:hello@4etverg.com">
                <Mail className="mr-2 h-4 w-4" />
                {t('consultation.cta')}
              </a>
            </Button>
          </CtaRow>
        </ContactCard>
      </ConsultationContainer>
    </ConsultationSection>
  );
};
