'use client';

import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ProjectsSection,
  ProjectsContainer,
  SectionTitle,
  SectionSubtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectLinks,
} from './Projects.styled';
import { projectsData } from './Projects.utils';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <SectionSubtitle>{t('projects.subtitle')}</SectionSubtitle>

        <ProjectsGrid>
          {projectsData.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                <img
                  src={project.imageUrl}
                  alt={t(`projects.${project.id}.title`)}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </ProjectImage>

              <ProjectInfo>
                <ProjectTitle>{t(`projects.${project.id}.title`)}</ProjectTitle>
                <ProjectDescription>{t(`projects.${project.id}.description`)}</ProjectDescription>

                <ProjectTags>
                  {project.tags.map(tag => (
                    <ProjectTag key={tag.id}>{tag.name}</ProjectTag>
                  ))}
                </ProjectTags>

                <ProjectLinks>
                  {project.projectUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('projects.viewProject')}
                      </a>
                    </Button>
                  )}
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};
