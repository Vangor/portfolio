'use client';

import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  ProjectsSection,
  ProjectsContainer,
  SectionHeader,
  Kicker,
  SectionTitle,
  ProjectsList,
  ProjectCard,
  ProjectLinkCard,
  ProjectTop,
  ProjectName,
  ProjectTag,
  ProjectArrow,
  ProjectDescription,
  ProjectFooter,
} from './Projects.styled';
import { projectsData } from './Projects.utils';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeader>
          <Kicker>{t('projects.kicker')}</Kicker>
          <SectionTitle>{t('projects.title')}</SectionTitle>
        </SectionHeader>

        <ProjectsList>
          {projectsData.map(project => {
            const content = (
              <>
                <ProjectTop>
                  <div>
                    <ProjectName>{t(`projects.${project.id}.title`)}</ProjectName>
                    <ProjectTag>{project.tag}</ProjectTag>
                  </div>
                  <ProjectArrow aria-hidden="true">
                    <ExternalLink className="h-4 w-4" />
                  </ProjectArrow>
                </ProjectTop>
                <ProjectDescription>{t(`projects.${project.id}.description`)}</ProjectDescription>
                {project.external ? (
                  <ProjectFooter>{t('common.visit')}</ProjectFooter>
                ) : null}
              </>
            );

            return project.href ? (
              <ProjectLinkCard
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </ProjectLinkCard>
            ) : (
              <ProjectCard key={project.id}>{content}</ProjectCard>
            );
          })}
        </ProjectsList>
      </ProjectsContainer>
    </ProjectsSection>
  );
};
