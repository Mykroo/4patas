import {getRequestConfig} from 'next-intl/server';
import type {GetRequestConfigParams} from 'next-intl/server';

export default getRequestConfig(async ({locale}: GetRequestConfigParams) => {
  const lang = locale ?? 'es';
  const messages = (await import(`../messages/${lang}.json`)).default;
  return { messages, locale: lang };
}); 