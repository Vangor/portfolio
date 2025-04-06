import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { portfolioTheme } from '@/lib/themes';

// Mock next-intl provider
const MockNextIntl = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Create a custom renderer that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={portfolioTheme.light}>
      <MockNextIntl>{children}</MockNextIntl>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };
