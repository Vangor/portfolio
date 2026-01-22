'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
} from './Consultation.styled';
import ConsultationButton from './Consultation.button';

export const Consultation = () => {
  const { t } = useTranslation();

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
    },
  ];

  return (
    <ConsultationSection id="consultation">
      <ConsultationContainer>
        <SectionTitle>{t('consultation.title')}</SectionTitle>
        <SectionSubtitle>{t('consultation.subtitle')}</SectionSubtitle>

        <PricingCardsContainer>
          {options.map(option => (
            <PricingCard key={option.id}>
              <PricingCardHeader>
                <PricingCardTitle>{t(`consultation.${option.id}.title`)}</PricingCardTitle>
                <PricingCardPrice>{t(`consultation.${option.id}.price`)}</PricingCardPrice>
              </PricingCardHeader>

              <PricingCardContent>
                <PricingCardDescription>
                  {t(`consultation.${option.id}.description`)}
                </PricingCardDescription>
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
