'use client';

import { PostHogProvider as Provider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Add PostHog to the window object type
declare global {
  interface Window {
    posthog?: typeof posthog;
  }
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize PostHog
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
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
  }, [pathname, searchParams]);

  return <Provider client={posthog}>{children}</Provider>;
}
