'use client';

import { useTranslation } from 'react-i18next';
import { Code2, Database, Wrench, Users } from 'lucide-react';
import {
  SkillsSection,
  SkillsContainer,
  SectionTitle,
  SectionSubtitle,
  SkillCategoriesContainer,
  SkillCategory,
  CategoryHeader,
  CategoryTitle,
  CategoryContent,
  SkillsList,
  SkillItem,
  SkillName,
  SkillLevel,
  SkillLevelFill,
} from './Skills.styled';
import { skillsData, SkillCategory as SkillCategoryType } from './Skills.utils';

// Map of category icons
const categoryIcons = {
  frontend: Code2,
  backend: Database,
  tools: Wrench,
  management: Users,
};

export const Skills = () => {
  const { t } = useTranslation();

  // Get the icon component for each category
  const getCategoryWithIcon = (category: SkillCategoryType) => {
    const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons];
    return {
      ...category,
      icon: IconComponent,
    };
  };

  const categoriesWithIcons = skillsData.map(getCategoryWithIcon);

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>{t('skills.title')}</SectionTitle>
        <SectionSubtitle>{t('skills.subtitle')}</SectionSubtitle>

        <SkillCategoriesContainer>
          {categoriesWithIcons.map(category => {
            const IconComponent = category.icon;

            return (
              <SkillCategory key={category.id}>
                <CategoryHeader>
                  <CategoryTitle>
                    <IconComponent className="h-5 w-5" />
                    {t(`skills.${category.titleKey}`)}
                  </CategoryTitle>
                </CategoryHeader>

                <CategoryContent>
                  <SkillsList>
                    {category.skills.map(skill => (
                      <SkillItem key={skill.id}>
                        <div className="flex flex-col w-full">
                          <div className="flex items-center justify-between mb-1">
                            <SkillName>{skill.name}</SkillName>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <SkillLevel>
                            <SkillLevelFill level={skill.level} />
                          </SkillLevel>
                        </div>
                      </SkillItem>
                    ))}
                  </SkillsList>
                </CategoryContent>
              </SkillCategory>
            );
          })}
        </SkillCategoriesContainer>
      </SkillsContainer>
    </SkillsSection>
  );
};
