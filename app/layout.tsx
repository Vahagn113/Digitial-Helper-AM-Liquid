import type {Metadata} from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Digital Helper AM | Job Help & Digital Services',
  description: 'Fix Your CV. Grow Your Business. Solve Digital Problems. Professional assistance for job seekers and small businesses in Armenia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
