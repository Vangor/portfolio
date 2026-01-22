'use client';

import { PostHogProvider as Provider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Add PostHog to the window object type
declare global {
  interface Window {
    posthog?: unknown;
  }
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Initialize PostHog
    if (typeof window !== 'undefined') {
      posthog.init(import.meta.env.VITE_POSTHOG_KEY || '', {
        api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
        capture_pageview: false, // We'll capture them manually
        loaded: posthog => {
          if (process.env.NODE_ENV === 'development') {
            // Make available during development
            window.posthog = posthog;
          }
        },
      });
    }

    // Capture page views on route changes
    const handlePageView = () => {
      if (posthog) {
        posthog.capture('$pageview');
      }
    };

    // Track page views
    handlePageView();

    // Return a cleanup function
    return () => {
      // No need to do anything in cleanup
    };
  }, [location.pathname, location.search]);

  return <Provider client={posthog}>{children}</Provider>;
}
