'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import {
  DocumentContainer,
  LastUpdated,
  Section,
  SectionTitle,
  SectionContent,
  SectionList,
  ListItem,
  ContactLink,
} from './LegalDocument.styled';

export const Terms: React.FC = () => {
  const t = useTranslations('terms');
  const formattedDate = new Date(2023, 3, 6).toLocaleDateString(); // April 6, 2023

  return (
    <DocumentContainer>
      <LastUpdated>Last updated: {formattedDate}</LastUpdated>

      <Section>
        <SectionTitle>{t('introduction.title')}</SectionTitle>
        <SectionContent>{t('introduction.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('services.title')}</SectionTitle>
        <SectionContent>{t('services.content')}</SectionContent>
        <SectionList>
          <ListItem>{t('services.items.consulting')}</ListItem>
          <ListItem>{t('services.items.development')}</ListItem>
          <ListItem>{t('services.items.mentoring')}</ListItem>
        </SectionList>
      </Section>

      <Section>
        <SectionTitle>{t('payments.title')}</SectionTitle>
        <SectionContent>{t('payments.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('intellectual.title')}</SectionTitle>
        <SectionContent>{t('intellectual.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('termination.title')}</SectionTitle>
        <SectionContent>{t('termination.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('limitation.title')}</SectionTitle>
        <SectionContent>{t('limitation.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('governing.title')}</SectionTitle>
        <SectionContent>{t('governing.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('changes.title')}</SectionTitle>
        <SectionContent>{t('changes.content')}</SectionContent>
      </Section>
    </DocumentContainer>
  );
};
