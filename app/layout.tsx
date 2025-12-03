import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import { clinicConfig } from '@/lib/clinic-config';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-open-sans',
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
    <html lang="pt-BR" className={`${poppins.variable} ${openSans.variable}`}>
      <body className={`${openSans.className} font-normal`}>{children}</body>
    </html>
  );
}

