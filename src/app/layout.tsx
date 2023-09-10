import type { Metadata } from 'next';
import { Suspense } from 'react';

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
    url: 'https://nextarter-chakra.sznm.dev',
    title: 'Dara website',
    description: 'Next.js + chakra-ui + TypeScript template',
    images: {
      url: 'https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
      alt: 'nextarter-chakra.sznm.dev og-image',
    },
  },
  twitter: {
    creator: '@sozonome',
    card: 'summary_large_image',
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
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
