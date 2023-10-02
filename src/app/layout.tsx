import Header from '@/components/core/Header';
import { Providers } from '@/redux/provider';
import BottomNavigation from '@/components/core/BottomNavigation';
import Footer from '@/components/core/Footer';

// SWIPER JS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import './globals.css';

export const metadata = {
  title: 'DeepBazar - Electronics eCommerce Website In Bangladesh',
  description: 'Biggest E-commerce website in bangladesh',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Providers>
          <Header />
          <div className="min-h-[20vh] px-4">{children}</div>
          <BottomNavigation />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
