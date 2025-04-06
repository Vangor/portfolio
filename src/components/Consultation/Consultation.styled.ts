import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const ConsultationSection = tw.section`
  py-20
  px-4
  md:px-8
  max-w-7xl
  mx-auto
`;

export const ConsultationContainer = tw.div`
  flex
  flex-col
  items-center
`;

export const SectionTitle = tw.h2`
  text-4xl
  font-bold
  mb-2
  text-center
`;

export const SectionSubtitle = tw.p`
  text-xl
  text-muted-foreground
  mb-12
  text-center
  max-w-2xl
`;

export const PricingCardsContainer = tw.div`
  flex
  flex-col
  gap-8
  w-full
  max-w-full
  mx-auto
`;

export const PricingCard = tw.div`
  bg-card
  rounded-lg
  shadow-md
  border
  border-border
  overflow-hidden
  flex
  flex-col
  w-full
  transition-transform
  duration-300
  hover:translate-y-[-4px]
  text-center
  pb-8
`;

export const PricingCardHeader = tw.div`
  p-6
  px-8
  border-b
  border-border
  bg-card/50
  text-center
  flex
  flex-col
  justify-center
`;

export const PricingCardTitle = tw.h3`
  text-xl
  font-semibold
  mb-2
  text-center
`;

export const PricingCardPrice = tw.div`
  text-2xl
  font-bold
  text-primary
  text-center
`;

export const PricingCardContent = tw.div`
  p-6
  px-8
  flex-grow
  flex
  flex-col
  items-center
  justify-between
`;

export const PricingCardDescription = tw.p`
  text-muted-foreground
  mb-8
  text-center
  flex
  items-center
  justify-center
  max-w-3xl
  mx-auto
`;

export const PricingCardButton = tw.div`
  flex
  justify-center
  w-full
  mt-auto
`;

export const CustomOptionContainer = tw.div`
  flex
  justify-center
  mt-2
  text-sm
  text-muted-foreground
  text-center
`;

export const CWalletButton = styled.button.attrs({
  className: 'ccwallet__tipbox__button',
})`
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 0.5rem !important;
  font-weight: 500 !important;
  transition-property:
    color, background-color, border-color, text-decoration-color, fill, stroke, transform,
    box-shadow !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 200ms !important;
  padding: 0.75rem 1.5rem !important;
  min-width: 160px !important;
  font-size: 0.875rem !important;
  line-height: 1.25rem !important;
  background-color: hsl(var(--primary)) !important;
  color: hsl(var(--primary-foreground)) !important;
  cursor: pointer !important;
  border: 1px solid var(--border) !important;
  position: relative !important;
  overflow: hidden !important;

  /* Add subtle shadow for depth */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;

  &:hover {
    background-color: hsl(var(--primary) / 0.9) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  }

  &:active {
    transform: translateY(0) !important;
    background-color: hsl(var(--primary) / 0.95) !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
    transition-duration: 100ms !important;
  }

  &:focus-visible {
    outline: 2px solid hsl(var(--primary)) !important;
    outline-offset: 2px !important;
    box-shadow:
      0 0 0 2px hsl(var(--background)),
      0 0 0 4px hsl(var(--primary) / 0.4) !important;
  }

  &:disabled {
    opacity: 0.5 !important;
    pointer-events: none !important;
  }

  /* Add a subtle shine effect on hover */
  &::before {
    content: '' !important;
    position: absolute !important;
    top: 0 !important;
    left: -75% !important;
    width: 50% !important;
    height: 100% !important;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    ) !important;
    transform: skewX(-25deg) !important;
    transition: all 0.5s ease !important;
    opacity: 0 !important;
  }

  &:hover::before {
    left: 125% !important;
    opacity: 1 !important;
  }
`;
