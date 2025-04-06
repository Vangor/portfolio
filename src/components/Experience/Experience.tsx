'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Building2, MapPin, Briefcase, Linkedin } from 'lucide-react';
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
  const t = useTranslations('experience');

  const jobs = [
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
        <SectionTitle>{t('title')}</SectionTitle>

        <TimelineContainer>
          <TimelineLine />

          {jobs.map((job, index) => (
            <TimelineItem key={job.id}>
              <TimelineDot>{job.icon}</TimelineDot>

              <TimelineDate align={index % 2 === 0 ? 'left' : 'right'}>
                {t(`${job.id}.period`)}
              </TimelineDate>

              <TimelineContent>
                <JobHeader>
                  <CompanyName>{t(`${job.id}.company`)}</CompanyName>
                  <JobPosition>{t(`${job.id}.position`)}</JobPosition>
                  <JobLocation>
                    <MapPin className="h-4 w-4" />
                    {t(`${job.id}.location`)}
                  </JobLocation>
                </JobHeader>

                <JobContent>
                  <JobDescription>{t(`${job.id}.description`)}</JobDescription>

                  <AchievementsList>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Achievement key={i}>{t(`${job.id}.achievements.${i}`)}</Achievement>
                    ))}
                  </AchievementsList>
                </JobContent>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>

        <LinkedInButtonContainer>
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://www.linkedin.com/in/konstantinvan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              {t('fullExperience')}
            </Link>
          </Button>
        </LinkedInButtonContainer>
      </ExperienceContainer>
    </ExperienceSection>
  );
};
