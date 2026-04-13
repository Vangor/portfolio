import { PostHogProvider as Provider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    posthog?: unknown;
  }
}

posthog.init(import.meta.env.VITE_POSTHOG_KEY || '', {
  api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
  capture_pageview: false,
  loaded: (ph) => {
    if (import.meta.env.DEV) {
      window.posthog = ph;
    }
  },
});

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    posthog.capture('$pageview');
  }, [location.pathname, location.search]);

  return <Provider client={posthog}>{children}</Provider>;
}
