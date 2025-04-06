import tw from 'tailwind-styled-components';

export const HeroSection = tw.section`
  py-24
  px-4
  md:py-32
`;

export const HeroContainer = tw.div`
  container
  mx-auto
  flex
  flex-col
  items-center
  text-center
`;

export const Title = tw.h1`
  text-4xl
  font-bold
  tracking-tighter
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
`;

export const Subtitle = tw.p`
  mx-auto
  mt-4
  max-w-[700px]
  text-gray-500
  md:text-xl
  dark:text-gray-400
`;

export const ContactContainer = tw.div`
  mt-6
  flex
  flex-wrap
  justify-center
  gap-4
`;
