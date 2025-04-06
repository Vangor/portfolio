import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const ProjectsSection = tw.section`
  py-20
  px-4
  md:px-8
  max-w-7xl
  mx-auto
`;

export const ProjectsContainer = tw.div`
  flex
  flex-col
  items-center
`;

export const SectionTitle = tw.h2`
  text-4xl
  font-bold
  mb-2
  text-center
`;

export const SectionSubtitle = tw.p`
  text-xl
  text-muted-foreground
  mb-12
  text-center
  max-w-2xl
`;

export const ProjectsGrid = tw.div`
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-8
  w-full
`;

export const ProjectCard = tw.div`
  rounded-lg
  overflow-hidden
  shadow-lg
  bg-card
  border
  border-border
  flex
  flex-col
  h-full
  transition-transform
  duration-300
  hover:translate-y-[-4px]
`;

export const ProjectImage = tw.div`
  h-48
  relative
  overflow-hidden
  bg-muted
`;

export const ProjectInfo = tw.div`
  p-6
  flex-grow
  flex
  flex-col
`;

export const ProjectTitle = tw.h3`
  text-xl
  font-semibold
  mb-2
`;

export const ProjectDescription = tw.p`
  text-muted-foreground
  mb-4
  flex-grow
`;

export const ProjectTags = tw.div`
  flex
  flex-wrap
  gap-2
  mb-4
`;

export const ProjectTag = tw.span`
  px-2
  py-1
  text-xs
  rounded-full
  bg-primary/10
  text-primary
  font-medium
`;

export const ProjectLinks = tw.div`
  flex
  gap-3
  mt-auto
`;
