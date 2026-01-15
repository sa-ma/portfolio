import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  metadataBase: new URL('https://samailabala.com'),
  title: {
    default: 'Samaila Bala',
    template: '%s | Samaila Bala',
  },
  description: 'Developer, writer, and minimalist.',
  openGraph: {
    title: 'Samaila Bala',
    description: 'Developer, writer, and minimalist.',
    url: 'https://samailabala.com',
    siteName: 'Samaila Bala',
    locale: 'en_US',
    type: 'website',
    images: 'https://samailabala.com/og-bg.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Samaila Bala',
    card: 'summary_large_image',
    images: 'https://samailabala.com/og-bg.png',
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111010" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
