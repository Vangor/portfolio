import tw from 'tailwind-styled-components';

export const SkillsSection = tw.section`
  px-6
  py-14
  sm:px-8
  lg:py-20
`;

export const SkillsContainer = tw.div`
  mx-auto
  w-full
  max-w-[1080px]
`;

export const SectionHeader = tw.div`
  mb-10
`;

export const Kicker = tw.span`
  font-mono
  text-[12px]
  uppercase
  tracking-[0.16em]
  text-muted-foreground
`;

export const SectionTitle = tw.h2`
  mt-3
  text-[clamp(1.75rem,3.4vw,2.5rem)]
  font-semibold
  tracking-[-0.03em]
  text-foreground
`;

export const SkillGroups = tw.div`
  grid
  gap-6
`;

export const SkillGroup = tw.div`
  rounded-[20px]
  border
  border-border
  bg-background
  p-5
`;

export const GroupLabel = tw.div`
  font-mono
  text-[12px]
  uppercase
  tracking-[0.16em]
  text-muted-foreground
`;

export const Chips = tw.div`
  mt-4
  flex
  flex-wrap
  gap-2.5
`;

export const Chip = tw.span`
  inline-flex
  items-center
  rounded-full
  border
  border-border/80
  bg-background
  px-3
  py-1.5
  text-[14px]
  leading-none
  text-foreground
  shadow-[0_1px_2px_rgba(20,22,26,0.03)]
`;
