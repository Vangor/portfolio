'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useEffect, useState } from 'react';

type ClientProvidersProps = {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
};

export default function ClientProviders({ children, locale, messages }: ClientProvidersProps) {
  // Client-side initialization state
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render anything on the server
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Madrid">
      {children}
    </NextIntlClientProvider>
  );
}
