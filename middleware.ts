import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

// Export locales array for use in other files
export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export default createMiddleware({
  // List of locales
  locales,
  // Used when no locale matches
  defaultLocale,
  // Always include the locale in the URL
  localePrefix: 'always',
  // Enable locale detection
  localeDetection: true,
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/', '/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
