import tw from 'tailwind-styled-components';

export const NavContainer = tw.div<{ variant?: 'header' | 'footer' }>`
  flex
  items-center
  flex-row
    flex-wrap
    gap-6
    items-center
`;

export const NavLink = tw.a<{ variant?: 'header' | 'footer' }>`
  text-sm
  text-muted-foreground
  hover:text-foreground
  hover:underline
  hover:underline-offset-4
  transition-colors
  transition-all
  duration-200
  cursor-pointer
`;

export const NavTitle = tw.h3`
  font-semibold
  text-sm
  mr-2
  hidden
  md:block
  hover:text-primary
  transition-colors
  duration-200
`;
