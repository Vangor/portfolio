'use client';

import { ReactNode } from 'react';

type ClientProvidersProps = {
  children: ReactNode;
  locale?: string;
  messages?: Record<string, unknown>;
};

export default function ClientProviders({ children, locale, messages }: ClientProvidersProps) {
  void locale;
  void messages;
  return <>{children}</>;
}
