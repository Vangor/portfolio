import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const FooterContainer = tw.footer`
  bg-muted/50
  py-8
  border-t
  border-border
`;

export const FooterContent = tw.div`
  max-w-7xl
  mx-auto
  px-4
  md:px-8
  flex
  flex-row
  flex-wrap
  justify-between
  items-center
  gap-8
`;

export const FooterSection = tw.div`
  flex
  flex-row
  items-center
  gap-6
`;

export const FooterLogo = tw.div`
  text-xl
  font-bold
  mr-4
`;

export const FooterTagline = tw.p`
  text-muted-foreground
  text-sm
  hidden
  md:block
  max-w-xs
`;

export const FooterNav = tw.nav`
  flex
  flex-row
  flex-wrap
  gap-6
  items-center
`;

export const FooterNavTitle = tw.h3`
  font-semibold
  text-sm
  mr-2
  hidden
  md:block
`;

export const FooterNavLink = tw.a`
  text-sm
  text-muted-foreground
  hover:text-foreground
  transition-colors
`;

export const FooterSocial = tw.div`
  flex
  gap-4
  ml-auto
`;

export const FooterSocialLink = tw.a`
  text-muted-foreground
  hover:text-foreground
  transition-colors
`;

export const FooterBottom = tw.div`
  w-full
  mt-12
  pt-12
  flex
  flex-row
  justify-between
  items-center
  flex-wrap
  gap-4
  text-sm
  text-muted-foreground
`;

export const FooterCopyright = tw.p`
  text-center
  md:text-left
`;

export const FooterLinks = tw.div`
  flex
  gap-6
`;

export const FooterBottomLink = tw.a`
  hover:text-foreground
  transition-colors
`;
