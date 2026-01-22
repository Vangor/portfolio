'use client';

import { useTranslation } from 'react-i18next';
import { MapPin, Briefcase, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ExperienceSection,
  ExperienceContainer,
  SectionTitle,
  TimelineContainer,
  TimelineLine,
  TimelineItem,
  TimelineDot,
  TimelineDate,
  TimelineContent,
  JobHeader,
  CompanyName,
  JobPosition,
  JobLocation,
  JobContent,
  JobDescription,
  AchievementsList,
  Achievement,
  LinkedInButtonContainer,
} from './Experience.styled';

export const Experience = () => {
  const { t } = useTranslation();

  const jobs = [
    {
      id: 'nda-igaming',
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      id: 'pipedrive',
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      id: 'accenture',
      icon: <Briefcase className="h-4 w-4" />,
    },
  ];

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle>{t('experience.title')}</SectionTitle>

        <TimelineContainer>
          <TimelineLine />

          {jobs.map((job, index) => (
            <TimelineItem key={job.id}>
              <TimelineDot>{job.icon}</TimelineDot>

              <TimelineDate align={index % 2 === 0 ? 'left' : 'right'}>
                {t(`experience.${job.id}.period`)}
              </TimelineDate>

              <TimelineContent>
                <JobHeader>
                  <CompanyName>{t(`experience.${job.id}.company`)}</CompanyName>
                  <JobPosition>{t(`experience.${job.id}.position`)}</JobPosition>
                  <JobLocation>
                    <MapPin className="h-4 w-4" />
                    {t(`experience.${job.id}.location`)}
                  </JobLocation>
                </JobHeader>

                <JobContent>
                  <JobDescription>{t(`experience.${job.id}.description`)}</JobDescription>

                  <AchievementsList>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Achievement key={i}>
                        {t(`experience.${job.id}.achievements.${i}`)}
                      </Achievement>
                    ))}
                  </AchievementsList>
                </JobContent>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>

        <LinkedInButtonContainer>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.linkedin.com/in/konstantinvan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              {t('experience.fullExperience')}
            </a>
          </Button>
        </LinkedInButtonContainer>
      </ExperienceContainer>
    </ExperienceSection>
  );
};
