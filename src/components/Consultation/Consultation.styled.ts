import tw from 'tailwind-styled-components';

export const ConsultationSection = tw.section`
  px-6
  py-14
  sm:px-8
  lg:py-20
`;

export const ConsultationContainer = tw.div`
  mx-auto
  w-full
  max-w-[1080px]
`;

export const ContactCard = tw.div`
  rounded-[20px]
  border
  border-border
  bg-background
  px-6
  py-8
  shadow-[0_1px_2px_rgba(20,22,26,0.04),0_18px_40px_rgba(20,22,26,0.06)]
  sm:px-8
`;

export const SectionHeader = tw.div`
  mb-4
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

export const Body = tw.p`
  max-w-2xl
  text-[16px]
  leading-7
  text-muted-foreground
`;

export const CtaRow = tw.div`
  mt-6
  flex
  flex-wrap
  gap-3
`;
