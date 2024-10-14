import './globals.scss';
import { Krub } from 'next/font/google';
import Providers from '@/components/provider';

export const metadata = {
  title: 'EWO',
  description: 'EWO',
};

const body = Krub({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--tp-ff-body',
});
const heading = Krub({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--tp-ff-heading',
});
const p = Krub({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--tp-ff-p',
});
const jost = Krub({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--tp-ff-jost',
});
const roboto = Krub({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--tp-ff-roboto',
});
const oregano = Krub({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--tp-ff-oregano',
});
const charm = Krub({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--tp-ff-charm',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${heading.variable} ${p.variable} ${jost.variable} ${roboto.variable} ${oregano.variable} ${charm.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
