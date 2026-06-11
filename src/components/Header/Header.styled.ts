import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.header`
  sticky
  top-0
  z-50
  w-full
  border-b
  border-transparent
  bg-background/90
  backdrop-blur-md
`;

export const HeaderContent = tw.div`
  mx-auto
  flex
  w-full
  max-w-[1080px]
  items-center
  justify-between
  px-6
  py-4
  sm:px-8
`;

export const Logo = tw.div`
  flex
  items-center
  gap-3
`;

export const Nav = tw.nav`
  hidden
  items-center
  gap-6
  lg:flex
`;

export const Actions = tw.div`
  flex
  items-center
  gap-2
  sm:gap-3
`;
