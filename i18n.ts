import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'fr'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => ({
  locale: locale || 'en',
  messages: (await import(`./messages/${locale || 'en'}.json`)).default,
}))
