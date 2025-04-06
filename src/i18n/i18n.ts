import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import type { GetRequestConfigParams } from 'next-intl/server';

// Import the locales from middleware
import { locales } from '../../middleware';

// Helper function to retrieve messages
export async function getMessages(locale: string) {
  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading messages for locale: ${locale}`, error);
    return {};
  }
}

// Fix the type checking for locales
export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
  // Handle undefined locale by defaulting to 'en'
  const currentLocale = locale || 'en';

  // Check if locale exists in locales array
  if (!locales.includes(currentLocale as 'en' | 'ru' | 'es')) {
    console.log(`Locale not found: ${currentLocale}, available locales: ${locales.join(', ')}`);
    notFound();
  }

  return {
    locale: currentLocale,
    messages: await getMessages(currentLocale),
  };
});
