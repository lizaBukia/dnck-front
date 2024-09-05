import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthHeader from './Components/AuthHeader/AuthHeader';
import RecoilWrapper from './Components/RecoilWrapper/RecoilWrapper';

const inter: NextFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'DNCK',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilWrapper>
          <div className={'content'}>
            <AuthHeader />
          </div>
          {children}
        </RecoilWrapper>
      </body>
    </html>
  );
}
