import type { Metadata } from 'next';
import { Suspense } from 'react';
import Script from 'next/script';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';
import '~/lib/styles/globals.css';
import Loading from './loading';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Dara Website';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: 'Dara website' },
  description: 'Dara websigte',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
  openGraph: {
    url: 'https://usedara.com',
    title: 'Dara website',
    description: 'Services delivered smart',
    images: {
      url: '',
      alt: 'Dara website',
    },
  },
  twitter: {
    creator: '@thatguycalledbrain',
    card: 'summary_large_image',
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TY29F5BVQD"
      />

      <Script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TY29F5BVQD');`}
      </Script>
      <link rel="icon" href="/assets/fav.png" sizes="32x32" />
      <body>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
