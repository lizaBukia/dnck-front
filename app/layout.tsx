import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import './globals.css';

const inter: NextFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}> {children}</body>
    </html>
  );
}
