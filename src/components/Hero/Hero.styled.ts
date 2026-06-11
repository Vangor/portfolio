import tw from 'tailwind-styled-components';

export const HeroSection = tw.section`
  px-6
  pt-20
  pb-16
  sm:px-8
  lg:pt-28
  lg:pb-20
`;

export const HeroContainer = tw.div`
  mx-auto
  grid
  w-full
  max-w-[1080px]
  gap-10
  lg:grid-cols-[minmax(0,1fr)_340px]
  lg:items-end
`;

export const HeroCopy = tw.div`
  max-w-3xl
`;

export const Eyebrow = tw.div`
  mb-8
  inline-flex
  items-center
  gap-3
  text-[13px]
  text-muted-foreground
`;

export const EyebrowDot = tw.span`
  h-2
  w-2
  rounded-full
  bg-emerald-500
  shadow-[0_0_0_6px_rgba(16,185,129,0.12)]
`;

export const Title = tw.h1`
  text-balance
  text-[clamp(3.5rem,11vw,6.75rem)]
  font-semibold
  leading-[0.92]
  tracking-[-0.055em]
  text-foreground
`;

export const Role = tw.p`
  mt-8
  flex
  flex-wrap
  gap-x-4
  gap-y-2
  text-[clamp(1.2rem,2.3vw,1.45rem)]
  font-medium
  tracking-[-0.03em]
  text-foreground
`;

export const Subtitle = tw.p`
  mt-8
  max-w-2xl
  text-[clamp(1.05rem,1.6vw,1.22rem)]
  leading-8
  text-muted-foreground
`;

export const ContactContainer = tw.div`
  mt-8
  flex
  flex-wrap
  gap-3
`;

export const HeroPortrait = tw.div`
  order-first
  flex
  flex-col
  justify-end
  lg:order-last
`;

export const PortraitFrame = tw.div`
  min-h-[190px]
  border
  border-border/80
  bg-background
  shadow-[0_1px_2px_rgba(20,22,26,0.04),0_18px_40px_rgba(20,22,26,0.08)]
  sm:min-h-[230px]
  lg:min-h-[260px]
`;

export const PortraitCaption = tw.div`
  mt-4
  flex
  items-center
  justify-between
  gap-4
  font-mono
  text-[13px]
  text-muted-foreground
`;
