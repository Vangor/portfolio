import styled, { css } from 'styled-components';
import tw from 'tailwind-styled-components';

export const ExperienceSection = tw.section`
  py-20
  px-4
  md:px-8
  max-w-7xl
  mx-auto
`;

export const ExperienceContainer = tw.div`
  flex
  flex-col
  items-center
`;

export const SectionTitle = tw.h2`
  text-4xl
  font-bold
  mb-8
  text-center
`;

export const TimelineContainer = tw.div`
  w-full
  relative
  flex
  flex-col
  space-y-12
  max-w-4xl
`;

export const TimelineLine = tw.div`
  absolute
  left-[16px]
  sm:left-1/2
  transform
  sm:translate-x-[-50%]
  h-full
  w-0.5
  bg-border
`;

export const TimelineItem = tw.div`
  relative
  flex
  flex-col
  sm:flex-row
  sm:even:flex-row-reverse
  gap-4
  sm:gap-8
  sm:items-center
`;

export const TimelineDot = tw.div`
  absolute
  top-0
  left-0
  sm:left-1/2
  transform
  sm:translate-x-[-50%]
  w-8
  h-8
  rounded-full
  bg-primary
  text-primary-foreground
  flex
  items-center
  justify-center
  z-10
  shadow-md
  border-2
  border-background
`;

export const TimelineDateTw = tw.div`
  ml-10
  sm:ml-0
  text-sm
  font-semibold
  text-muted-foreground
  mb-2
  sm:mb-0
  sm:w-[calc(50%-2rem)]
  sm:text-right
  sm:even:text-left
`;

export const TimelineDate = styled(TimelineDateTw)<{ align?: 'left' | 'right' }>`
  text-align: ${({ align }) => align || 'left'};
  ${({ align }) =>
    align === 'right' &&
    css`
      margin-left: auto;
      padding-right: 2rem;
    `}
`;

export const TimelineContent = tw.div`
  ml-10
  sm:ml-0
  sm:w-[calc(50%-2rem)]
  bg-card
  rounded-lg
  shadow-md
  border
  border-border
  overflow-hidden
`;

export const JobHeader = tw.div`
  p-4
  bg-card/50
  border-b
  border-border
`;

export const CompanyName = tw.h3`
  text-xl
  font-semibold
  mb-1
`;

export const JobPosition = tw.p`
  text-base
  font-medium
  text-primary
`;

export const JobLocation = tw.p`
  text-sm
  text-muted-foreground
  mt-1
  flex
  items-center
  gap-1
`;

export const JobContent = tw.div`
  p-4
`;

export const JobDescription = tw.p`
  text-muted-foreground
  mb-4
`;

export const AchievementsList = tw.ul`
  space-y-2
  list-disc
  pl-5
`;

export const Achievement = tw.li`
  text-sm
`;

export const LinkedInButtonContainer = tw.div`
  flex
  justify-center
  mt-12
`;
