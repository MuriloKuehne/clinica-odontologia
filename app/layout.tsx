import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import './globals.css';
import { clinicConfig } from '@/lib/clinic-config';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
});

export const metadata: Metadata = {
  title: clinicConfig.seo.title,
  description: clinicConfig.seo.description,
  keywords: clinicConfig.seo.keywords,
  openGraph: {
    title: clinicConfig.seo.title,
    description: clinicConfig.seo.description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${newsreader.className} font-normal`}>{children}</body>
    </html>
  );
}

