import './globals.scss';
import { Krub, Jost, Roboto, Charm, Oregano } from 'next/font/google';
import Providers from '@/components/provider';
import TawkToChat from '@/components/TawkToChat';

export const metadata = {
  title: 'EWO',
  description: 'EWO',
};

// const body = Krub({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--tp-ff-body',
// });
// const heading = Krub({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--tp-ff-heading',
// });
// const p = Krub({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--tp-ff-p',
// });
// const jost = Krub({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--tp-ff-jost',
// });
// const roboto = Krub({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--tp-ff-roboto',
// });
// const oregano = Krub({
//   weight: ['400', '600', '700'],
//   subsets: ['latin'],
//   variable: '--tp-ff-oregano',
// });
// const charm = Krub({
//   weight: ['400', '600', '700'],
//   subsets: ['latin'],
//   variable: '--tp-ff-charm',
// });
const body = Jost({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--tp-ff-body',
});
const heading = Jost({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--tp-ff-heading',
});
const p = Jost({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--tp-ff-p',
});
const jost = Jost({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--tp-ff-jost',
});
const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--tp-ff-roboto',
});
const oregano = Oregano({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--tp-ff-oregano',
});
const charm = Charm({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--tp-ff-charm',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body
        className={`${body.variable} ${heading.variable} ${p.variable} ${jost.variable} ${roboto.variable} ${oregano.variable} ${charm.variable}`}
      > */}
      <body
        className={`${body.variable} ${heading.variable} ${p.variable} ${jost.variable} ${roboto.variable} ${oregano.variable} ${charm.variable}`}
      >
        <Providers>{children}</Providers>
        <TawkToChat />
      </body>
    </html>
  );
}
