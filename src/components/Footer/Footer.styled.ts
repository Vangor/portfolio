import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const FooterContainer = tw.footer`
  bg-muted/50
  py-16
  border-t
  border-border
`;

export const FooterContent = tw.div`
  max-w-7xl
  mx-auto
  px-4
  md:px-8
  flex
  flex-col
  md:flex-row
  justify-between
  gap-10
`;

export const FooterSection = tw.div`
  flex
  flex-col
  gap-4
`;

export const FooterLogo = tw.div`
  text-2xl
  font-bold
`;

export const FooterTagline = tw.p`
  text-muted-foreground
  max-w-sm
`;

export const FooterNav = tw.nav`
  flex
  flex-col
  gap-3
`;

export const FooterNavTitle = tw.h3`
  font-semibold
  text-lg
  mb-2
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
  mt-3
`;

export const FooterSocialLink = tw.a`
  text-muted-foreground
  hover:text-foreground
  transition-colors
`;

export const FooterBottom = tw.div`
  mt-10
  pt-6
  border-t
  border-border
  flex
  flex-col
  md:flex-row
  justify-between
  items-center
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
