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

export const Privacy: React.FC = () => {
  const t = useTranslations('privacy');
  const formattedDate = new Date(2023, 3, 6).toLocaleDateString(); // April 6, 2023

  return (
    <DocumentContainer>
      <LastUpdated>Last updated: {formattedDate}</LastUpdated>

      <Section>
        <SectionTitle>{t('introduction.title')}</SectionTitle>
        <SectionContent>{t('introduction.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('information.title')}</SectionTitle>
        <SectionContent>{t('information.content')}</SectionContent>
        <SectionList>
          <ListItem>{t('information.items.usage')}</ListItem>
          <ListItem>{t('information.items.contact')}</ListItem>
          <ListItem>{t('information.items.cookies')}</ListItem>
        </SectionList>
      </Section>

      <Section>
        <SectionTitle>{t('usage.title')}</SectionTitle>
        <SectionContent>{t('usage.content')}</SectionContent>
        <SectionList>
          <ListItem>{t('usage.items.service')}</ListItem>
          <ListItem>{t('usage.items.communication')}</ListItem>
          <ListItem>{t('usage.items.improvement')}</ListItem>
        </SectionList>
      </Section>

      <Section>
        <SectionTitle>{t('sharing.title')}</SectionTitle>
        <SectionContent>{t('sharing.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('cookies.title')}</SectionTitle>
        <SectionContent>{t('cookies.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('security.title')}</SectionTitle>
        <SectionContent>{t('security.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('changes.title')}</SectionTitle>
        <SectionContent>{t('changes.content')}</SectionContent>
      </Section>
    </DocumentContainer>
  );
};
