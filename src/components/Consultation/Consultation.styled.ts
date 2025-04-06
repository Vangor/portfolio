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

export const CWalletButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-weight: 500;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  padding: 0.75rem 1.5rem;
  min-width: 160px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: black;
  color: white;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;
