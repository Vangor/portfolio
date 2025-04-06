'use client';

import React from 'react';
import { Dialog, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FooterBottomLink } from '../Footer.styled';
import { StyledDialogContent, ScrollableContent } from './PolicyDialog.styled';

interface PolicyDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export const PolicyDialog = ({ isOpen, onOpenChange, title, children }: PolicyDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <FooterBottomLink
          href="#"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            onOpenChange(true);
          }}
        >
          {title}
        </FooterBottomLink>
      </DialogTrigger>
      <StyledDialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ScrollableContent>{children}</ScrollableContent>
      </StyledDialogContent>
    </Dialog>
  );
};
