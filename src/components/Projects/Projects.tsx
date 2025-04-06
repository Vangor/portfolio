'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
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
  const t = useTranslations('projects');

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>{t('title')}</SectionTitle>
        <SectionSubtitle>{t('subtitle')}</SectionSubtitle>

        <ProjectsGrid>
          {projectsData.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </ProjectImage>

              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectTags>
                  {project.tags.map(tag => (
                    <ProjectTag key={tag.id}>{tag.name}</ProjectTag>
                  ))}
                </ProjectTags>

                <ProjectLinks>
                  {project.projectUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('viewProject')}
                      </Link>
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {t('viewCode')}
                      </Link>
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
