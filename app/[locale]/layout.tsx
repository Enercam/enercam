import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Enercam Solar Roofs - Integrated Solar Roofing Solutions',
  description: 'Beautiful, durable solar roofing systems for Central Africa. Premium integrated solar roofing solutions that generate clean energy while protecting your home.',
  keywords: [
    'solar roofing',
    'solar tiles',
    'integrated solar',
    'solar power Cameroon',
    'clean energy Central Africa',
    'solar installation',
    'renewable energy',
    'solar roof tiles',
    'battery storage',
    'solar panels Africa',
  ],
  authors: [{ name: 'Enercam Solar Roofs' }],
  creator: 'Enercam Solar Roofs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enercam.com',
    title: 'Enercam Solar Roofs - Integrated Solar Roofing Solutions',
    description: 'Beautiful, durable solar roofing systems for Central Africa. Premium integrated solar roofing solutions that generate clean energy while protecting your home.',
    siteName: 'Enercam Solar Roofs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enercam Solar Roofs - Integrated Solar Roofing Solutions',
    description: 'Beautiful, durable solar roofing systems for Central Africa. Premium integrated solar roofing solutions that generate clean energy while protecting your home.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!['en', 'fr'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
