// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    pathname: '/',
    query: {},
  })),
  usePathname: jest.fn(() => '/'),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}));

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => key => key),
  useLocale: jest.fn(() => 'en'),
}));

// Mock styled-components to avoid issues with SSR and testing
jest.mock('styled-components', () => {
  const originalModule = jest.requireActual('styled-components');

  const mockStyled = new Proxy(
    {},
    {
      get: function (obj, prop) {
        if (prop === 'default') {
          return mockStyled;
        }

        return function () {
          // Return a function that returns the component name
          const mockComponent = props => props.children || null;
          mockComponent.displayName = `styled.${prop}`;
          mockComponent.toString = () => `styled.${prop}`;
          mockComponent.withConfig = () => mockComponent;

          // Add other styled-components methods if needed
          mockComponent.attrs = () => mockComponent;

          return mockComponent;
        };
      },
    }
  );

  return {
    ...originalModule,
    default: mockStyled,
    createGlobalStyle: jest.fn(() => jest.fn(() => null)),
    css: jest.fn(() => ({})),
    keyframes: jest.fn(() => 'keyframes'),
    ThemeProvider: ({ children }) => children,
  };
});
