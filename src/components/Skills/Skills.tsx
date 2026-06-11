'use client';

import { useTranslation } from 'react-i18next';
import {
  SkillsSection,
  SkillsContainer,
  SectionHeader,
  Kicker,
  SectionTitle,
  SkillGroups,
  SkillGroup,
  GroupLabel,
  Chips,
  Chip,
} from './Skills.styled';
import { skillsData } from './Skills.utils';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionHeader>
          <Kicker>{t('skills.kicker')}</Kicker>
          <SectionTitle>{t('skills.title')}</SectionTitle>
        </SectionHeader>

        <SkillGroups>
          {skillsData.map(category => (
            <SkillGroup key={category.id}>
              <GroupLabel>{t(`skills.${category.titleKey}`)}</GroupLabel>
              <Chips>
                {category.skills.map(skill => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </Chips>
            </SkillGroup>
          ))}
        </SkillGroups>
      </SkillsContainer>
    </SkillsSection>
  );
};
