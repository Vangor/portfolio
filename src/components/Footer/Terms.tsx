'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DocumentContainer,
  LastUpdated,
  Section,
  SectionTitle,
  SectionContent,
  SectionList,
  ListItem,
} from './LegalDocument.styled';

export const Terms = () => {
  const { t } = useTranslation();

  const formattedDate = new Date(2023, 3, 6).toLocaleDateString(); // April 6, 2023

  return (
    <DocumentContainer>
      <LastUpdated>Last updated: {formattedDate}</LastUpdated>

      <Section>
        <SectionTitle>{t('terms.introduction.title')}</SectionTitle>
        <SectionContent>{t('terms.introduction.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('terms.services.title')}</SectionTitle>
        <SectionContent>{t('terms.services.content')}</SectionContent>
        <SectionList>
          <ListItem>{t('terms.services.items.consulting')}</ListItem>
          <ListItem>{t('terms.services.items.development')}</ListItem>
          <ListItem>{t('terms.services.items.mentoring')}</ListItem>
        </SectionList>
      </Section>

      <Section>
        <SectionTitle>{t('terms.payments.title')}</SectionTitle>
        <SectionContent>{t('terms.payments.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('terms.intellectual.title')}</SectionTitle>
        <SectionContent>{t('terms.intellectual.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('terms.termination.title')}</SectionTitle>
        <SectionContent>{t('terms.termination.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('terms.limitation.title')}</SectionTitle>
        <SectionContent>{t('terms.limitation.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('terms.governing.title')}</SectionTitle>
        <SectionContent>{t('terms.governing.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('terms.changes.title')}</SectionTitle>
        <SectionContent>{t('terms.changes.content')}</SectionContent>
      </Section>
    </DocumentContainer>
  );
};
