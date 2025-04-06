import styled from 'styled-components';
import tw from 'tailwind-styled-components';

// Base container with custom styling
export const DocumentContainer = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (min-width: 640px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  /* Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: hsl(var(--background));
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(var(--muted-foreground) / 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--muted-foreground) / 0.5);
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--muted-foreground) / 0.3) hsl(var(--background));
`;

export const LastUpdated = tw.p`
  text-muted-foreground
  text-sm
`;

export const Section = tw.section`
  space-y-2
`;

export const SectionTitle = tw.h3`
  text-lg
  font-semibold
`;

export const SectionContent = tw.p`
  text-muted-foreground
`;

// Create a styled ul with custom scrollbar
export const SectionList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.25rem;
  color: hsl(var(--muted-foreground));

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  /* Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: hsl(var(--background));
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(var(--muted-foreground) / 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--muted-foreground) / 0.5);
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--muted-foreground) / 0.3) hsl(var(--background));
`;

export const ListItem = tw.li``;

export const ContactLink = tw.a`
  text-primary
  hover:underline
`;
