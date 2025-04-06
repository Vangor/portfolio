import '../globals.css';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import Layout from '@/components/Layout/Layout';
import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import { notFound } from 'next/navigation';
import { locales } from '../../../middleware';
import { getMessages } from '@/i18n/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Konstantin Vanichkin - Portfolio',
  description: 'Personal portfolio showcasing frontend development and leadership experience',
};

export default async function LocaleLayout({
  children,
  params: paramsPromise,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await params before accessing properties
  const params = await Promise.resolve(paramsPromise);
  const { locale } = params;

  // Get messages for the current locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider defaultTheme="system">
              <Layout>{children}</Layout>
            </ThemeProvider>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
