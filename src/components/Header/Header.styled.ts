import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.header`
  sticky
  top-0
  z-50
  w-full
  border-b
  bg-background/95
  backdrop-blur
  supports-[backdrop-filter]:bg-background/60
  w-full
  flex
  items-center
  flex-col
`;

export const HeaderContent = tw.div`
  container
  flex
  h-16
  items-center
  justify-between
  px-4
  w-full
`;

export const Logo = tw.div`
  flex
  items-center
  space-x-2
  font-bold
  text-xl
`;

export const Nav = tw.nav`
  flex
  items-center
  space-x-4
  ml-auto
`;

export const Actions = tw.div`
  flex
  items-center
  space-x-4
`;
