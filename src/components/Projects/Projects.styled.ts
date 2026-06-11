import tw from 'tailwind-styled-components';

export const ProjectsSection = tw.section`
  px-6
  py-14
  sm:px-8
  lg:py-20
`;

export const ProjectsContainer = tw.div`
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

export const ProjectsList = tw.div`
  grid
  gap-5
`;

export const ProjectCard = tw.article`
  rounded-[20px]
  border
  border-border
  bg-background
  p-5
  shadow-[0_1px_2px_rgba(20,22,26,0.04),0_18px_40px_rgba(20,22,26,0.06)]
`;

export const ProjectLinkCard = tw.a`
  block
  rounded-[20px]
  border
  border-border
  bg-background
  p-5
  shadow-[0_1px_2px_rgba(20,22,26,0.04),0_18px_40px_rgba(20,22,26,0.06)]
  transition-transform
  duration-200
  hover:-translate-y-0.5
`;

export const ProjectTop = tw.div`
  flex
  items-start
  justify-between
  gap-4
`;

export const ProjectName = tw.div`
  text-xl
  font-semibold
  tracking-[-0.03em]
  text-foreground
`;

export const ProjectTag = tw.div`
  mt-1
  font-mono
  text-[13px]
  text-muted-foreground
`;

export const ProjectArrow = tw.span`
  mt-1
  inline-flex
  h-10
  w-10
  items-center
  justify-center
  rounded-full
  border
  border-border/80
  text-muted-foreground
`;

export const ProjectDescription = tw.p`
  mt-5
  max-w-3xl
  text-[16px]
  leading-7
  text-muted-foreground
`;

export const ProjectFooter = tw.div`
  mt-5
  font-mono
  text-[13px]
  text-foreground
`;
