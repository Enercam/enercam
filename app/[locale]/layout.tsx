import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

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

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!['en', 'fr'].includes(locale)) {
    return (
      <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
        <body className="font-sans min-h-screen flex flex-col">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
              <p className="text-gray-600">The requested language is not available.</p>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
