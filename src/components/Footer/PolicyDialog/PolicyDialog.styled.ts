import styled from 'styled-components';
import { DialogContent } from '@/components/ui/dialog';

export const StyledDialogContent = styled(DialogContent)`
  max-width: 36rem; /* 4xl in Tailwind */
  max-height: 90vh;
  overflow: hidden;

  button[data-state='open'] {
    cursor: pointer !important;
    &:hover {
      background-color: hsl(var(--muted) / 0.5);
      opacity: 1;
    }
  }
`;

export const ScrollableContent = styled.div`
  overflow-y: auto;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  max-height: calc(80vh - 8rem);

  /* Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: hsl(var(--background));
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(var(--primary) / 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--primary) / 0.4);
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--primary) / 0.2) hsl(var(--background));
`;
