import { getRequestConfig } from 'next-intl/server';
import en from '../messages/en.json';
import fr from '../messages/fr.json';

export const locales = ['en', 'fr'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(({ locale }) => {
  return {
    locale: locale as string,
    messages: locale === 'fr' ? fr : en,
  };
});
