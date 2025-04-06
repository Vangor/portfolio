import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import Layout from '@/components/Layout/Layout';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Name - Frontend Developer & Engineering Manager',
  description: 'Personal portfolio showcasing frontend development and leadership experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
            <Layout>{children}</Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
