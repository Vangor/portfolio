import tw from 'tailwind-styled-components';

export const FooterContainer = tw.footer`
  px-6
  pb-10
  pt-6
  sm:px-8
`;

export const FooterContent = tw.div`
  mx-auto
  flex
  w-full
  max-w-[1080px]
  flex-col
  gap-4
  border-t
  border-border
  pt-6
  sm:flex-row
  sm:items-center
  sm:justify-between
`;

export const FooterBottom = tw.div`
  flex
  flex-wrap
  items-center
  gap-3
  text-[13px]
  text-muted-foreground
`;

export const FooterLinks = tw.div`
  flex
  flex-wrap
  items-center
  gap-4
`;

export const FooterLink = tw.button`
  border-0
  bg-transparent
  p-0
  cursor-pointer
  font-mono
  text-[13px]
  text-muted-foreground
  transition-colors
  hover:text-foreground
`;

export const FooterBottomLink = tw.a`
  cursor-pointer
  font-mono
  text-[13px]
  text-muted-foreground
  transition-colors
  hover:text-foreground
`;
