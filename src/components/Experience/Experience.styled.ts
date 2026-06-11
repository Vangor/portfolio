import tw from 'tailwind-styled-components';

export const ExperienceSection = tw.section`
  px-6
  py-14
  sm:px-8
  lg:py-20
`;

export const ExperienceContainer = tw.div`
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

export const ExperienceList = tw.div`
  divide-y
  divide-border
  border-y
  border-border
`;

export const Role = tw.article`
  grid
  gap-6
  py-8
  lg:grid-cols-[220px_minmax(0,1fr)]
  lg:gap-10
`;

export const RoleAside = tw.div`
  flex
  flex-col
  gap-2
`;

export const CompanyRow = tw.div`
  flex
  flex-wrap
  items-center
  gap-2
`;

export const CompanyName = tw.div`
  text-lg
  font-semibold
  tracking-[-0.02em]
  text-foreground
`;

export const RoleBadge = tw.span`
  inline-flex
  w-fit
  rounded-full
  border
  border-border/80
  px-2.5
  py-1
  font-mono
  text-[11px]
  uppercase
  tracking-[0.08em]
  text-muted-foreground
`;

export const RoleDates = tw.div`
  font-mono
  text-[13px]
  text-muted-foreground
`;

export const RoleLocation = tw.div`
  font-mono
  text-[13px]
  text-muted-foreground
`;

export const RoleBody = tw.div`
  flex
  flex-col
  gap-4
`;

export const RoleTitle = tw.h3`
  text-[clamp(1.1rem,1.8vw,1.25rem)]
  font-medium
  tracking-[-0.03em]
  text-foreground
`;

export const RoleDescription = tw.p`
  max-w-3xl
  text-[16px]
  leading-7
  text-muted-foreground
`;

export const BulletList = tw.ul`
  grid
  gap-3
`;

export const Bullet = tw.li`
  flex
  gap-3
  text-[15px]
  leading-7
  text-foreground
  before:mt-[0.7rem]
  before:h-1.5
  before:w-1.5
  before:flex-none
  before:rounded-full
  before:bg-foreground
  before:content-['']
`;
