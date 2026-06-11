import tw from 'tailwind-styled-components';

export const NavContainer = tw.div`
  flex
  items-center
  gap-6
`;

export const NavLink = tw.a`
  text-sm
  font-medium
  text-muted-foreground
  transition-colors
  hover:text-foreground
`;

export const NavTitle = tw.h3`
  hidden
`;
