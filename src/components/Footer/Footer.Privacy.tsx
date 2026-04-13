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

export const Privacy: React.FC = () => {
  const { t } = useTranslation();

  const formattedDate = new Date(2023, 3, 6).toLocaleDateString(); // April 6, 2023

  return (
    <DocumentContainer>
      <LastUpdated>Last updated: {formattedDate}</LastUpdated>

      <Section>
        <SectionTitle>{t('privacy.introduction.title')}</SectionTitle>
        <SectionContent>{t('privacy.introduction.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('privacy.information.title')}</SectionTitle>
        <SectionContent>{t('privacy.information.content')}</SectionContent>
        <SectionList>
          <ListItem>{t('privacy.information.items.usage')}</ListItem>
          <ListItem>{t('privacy.information.items.contact')}</ListItem>
          <ListItem>{t('privacy.information.items.cookies')}</ListItem>
        </SectionList>
      </Section>

      <Section>
        <SectionTitle>{t('privacy.usage.title')}</SectionTitle>
        <SectionContent>{t('privacy.usage.content')}</SectionContent>
        <SectionList>
          <ListItem>{t('privacy.usage.items.service')}</ListItem>
          <ListItem>{t('privacy.usage.items.communication')}</ListItem>
          <ListItem>{t('privacy.usage.items.improvement')}</ListItem>
        </SectionList>
      </Section>

      <Section>
        <SectionTitle>{t('privacy.sharing.title')}</SectionTitle>
        <SectionContent>{t('privacy.sharing.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('privacy.cookies.title')}</SectionTitle>
        <SectionContent>{t('privacy.cookies.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('privacy.security.title')}</SectionTitle>
        <SectionContent>{t('privacy.security.content')}</SectionContent>
      </Section>

      <Section>
        <SectionTitle>{t('privacy.changes.title')}</SectionTitle>
        <SectionContent>{t('privacy.changes.content')}</SectionContent>
      </Section>
    </DocumentContainer>
  );
};
