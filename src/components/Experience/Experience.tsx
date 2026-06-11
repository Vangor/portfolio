'use client';

import { useTranslation } from 'react-i18next';
import {
  ExperienceSection,
  ExperienceContainer,
  SectionHeader,
  Kicker,
  SectionTitle,
  ExperienceList,
  Role,
  RoleAside,
  CompanyRow,
  CompanyName,
  RoleBadge,
  RoleDates,
  RoleLocation,
  RoleBody,
  RoleTitle,
  RoleDescription,
  BulletList,
  Bullet,
} from './Experience.styled';

const EXPERIENCE_ORDER = [
  { id: 'fetverg', current: true },
  { id: 'career-break', current: false },
  { id: 'nda-igaming', current: false },
  { id: 'pipedrive', current: false },
  { id: 'accenture', current: false },
] as const;

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionHeader>
          <Kicker>{t('experience.kicker')}</Kicker>
          <SectionTitle>{t('experience.title')}</SectionTitle>
        </SectionHeader>

        <ExperienceList>
          {EXPERIENCE_ORDER.map(item => {
            const achievements = t(`experience.${item.id}.achievements`, {
              returnObjects: true,
            }) as string[];

            return (
              <Role key={item.id}>
                <RoleAside>
                  <CompanyRow>
                    <CompanyName>{t(`experience.${item.id}.company`)}</CompanyName>
                    {item.current ? <RoleBadge>{t('experience.current')}</RoleBadge> : null}
                  </CompanyRow>
                  <RoleDates>{t(`experience.${item.id}.period`)}</RoleDates>
                  <RoleLocation>{t(`experience.${item.id}.location`)}</RoleLocation>
                </RoleAside>

                <RoleBody>
                  <RoleTitle>{t(`experience.${item.id}.position`)}</RoleTitle>
                  <RoleDescription>{t(`experience.${item.id}.description`)}</RoleDescription>
                  <BulletList>
                    {achievements.map(achievement => (
                      <Bullet key={achievement}>{achievement}</Bullet>
                    ))}
                  </BulletList>
                </RoleBody>
              </Role>
            );
          })}
        </ExperienceList>
      </ExperienceContainer>
    </ExperienceSection>
  );
};
