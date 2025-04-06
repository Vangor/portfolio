'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ConsultationSection,
  ConsultationContainer,
  SectionTitle,
  SectionSubtitle,
  PricingCardsContainer,
  PricingCard,
  PricingCardHeader,
  PricingCardTitle,
  PricingCardPrice,
  PricingCardContent,
  PricingCardDescription,
  PricingCardButton,
  CustomOptionContainer,
  CWalletButton,
} from './Consultation.styled';
import { Mail } from 'lucide-react';
import ConsultationButton from './Consultation.button';

export const Consultation = () => {
  const t = useTranslations('consultation');

  // Load Cwallet script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cwallet.com/opencc.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const options = [
    {
      id: 'option1',
      buttonType: 'cwallet',
      price: '250',
      code: 'RS6H6O6F',
    },
    {
      id: 'option2',
      buttonType: 'cwallet',
      price: '500',
      code: 'VEIV6CJY',
    },
    {
      id: 'option3',
      buttonType: 'contact',
      price: 'custom',
    },
  ];

  return (
    <ConsultationSection id="consultation">
      <ConsultationContainer>
        <SectionTitle>{t('title')}</SectionTitle>
        <SectionSubtitle>{t('subtitle')}</SectionSubtitle>

        <PricingCardsContainer>
          {options.map(option => (
            <PricingCard key={option.id}>
              <PricingCardHeader>
                <PricingCardTitle>{t(`${option.id}.title`)}</PricingCardTitle>
                <PricingCardPrice>{t(`${option.id}.price`)}</PricingCardPrice>
              </PricingCardHeader>

              <PricingCardContent>
                <PricingCardDescription>{t(`${option.id}.description`)}</PricingCardDescription>
              </PricingCardContent>

              <PricingCardButton>
                <ConsultationButton buttonType={option.buttonType} code={option.code} />
              </PricingCardButton>
            </PricingCard>
          ))}
        </PricingCardsContainer>
      </ConsultationContainer>
    </ConsultationSection>
  );
};
