import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const SkillsSection = tw.section`
  py-20
  px-4
  md:px-8
  max-w-7xl
  mx-auto
  bg-muted/30
`;

export const SkillsContainer = tw.div`
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
  mb-16
  text-center
  max-w-2xl
`;

export const SkillCategoriesContainer = tw.div`
  grid
  grid-cols-1
  md:grid-cols-2
  gap-8
  w-full
`;

export const SkillCategory = tw.div`
  bg-card
  rounded-lg
  shadow-md
  border
  border-border
  overflow-hidden
`;

export const CategoryHeader = tw.div`
  p-4
  border-b
  border-border
  bg-card/50
`;

export const CategoryTitle = tw.h3`
  text-xl
  font-semibold
  flex
  items-center
  gap-2
`;

export const CategoryContent = tw.div`
  p-6
`;

export const SkillsList = tw.div`
  grid
  grid-cols-2
  sm:grid-cols-3
  gap-y-4
  gap-x-2
`;

export const SkillItem = tw.div`
  flex
  items-center
  gap-2
`;

export const SkillIcon = tw.div`
  text-primary
  flex
  items-center
  justify-center
`;

export const SkillName = tw.span`
  text-sm
  font-medium
`;

export const SkillLevel = tw.div`
  h-1
  bg-primary/20
  rounded-full
  w-full
  mt-1
`;

export const SkillLevelFill = styled.div<{ level: number }>`
  height: 100%;
  border-radius: 9999px;
  background-color: hsl(var(--primary));
  width: ${props => `${props.level}%`};
`;
