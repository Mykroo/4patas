import { getRequestConfig } from 'next-intl/server';
import { locales, Locale } from './locales';

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'es';
  }

  const messages = {
    common: (await import(`../messages/${locale}/common.json`)).default,
    navigation: (await import(`../messages/${locale}/navigation.json`)).default,
    home: (await import(`../messages/${locale}/home.json`)).default,
    about: (await import(`../messages/${locale}/about.json`)).default,
    pets: (await import(`../messages/${locale}/pets.json`)).default
  };

  return {
    messages,
    timeZone: 'America/New_York',
    locale: locale as Locale
  };
}); 