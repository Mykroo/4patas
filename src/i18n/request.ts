import {getRequestConfig} from 'next-intl/server';
import type {GetRequestConfigParams} from 'next-intl/server';

export default getRequestConfig(async ({locale}: GetRequestConfigParams) => {
  const lang = locale ?? 'es';
  
  const messages = {
    common: (await import(`../messages/${lang}/common.json`)).default,
    navigation: (await import(`../messages/${lang}/navigation.json`)).default,
    home: (await import(`../messages/${lang}/home.json`)).default,
    about: (await import(`../messages/${lang}/about.json`)).default,
    pets: (await import(`../messages/${lang}/pets.json`)).default
  };

  return { messages, locale: lang };
}); 