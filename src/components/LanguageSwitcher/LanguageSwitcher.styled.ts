import tw from 'tailwind-styled-components';

export const LanguageContainer = tw.div`
  inline-flex
  items-center
  rounded-full
  border
  border-border/80
  bg-background
  p-0.5
  shadow-[0_1px_2px_rgba(20,22,26,0.04)]
`;

export const LanguageButton = tw.button`
  inline-flex
  h-8
  items-center
  justify-center
  rounded-full
  px-3
  text-xs
  font-medium
  text-muted-foreground
  transition-colors
  hover:text-foreground
`;
