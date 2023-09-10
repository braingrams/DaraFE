'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import { Chakra as ChakraProvider } from '~/lib/components/Chakra';
import { Next13ProgressBar } from 'next13-progressbar';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
      <Next13ProgressBar
        height="4px"
        color="#286FFF"
        options={{ showSpinner: true }}
        showOnShallow
      />
    </CacheProvider>
  );
};

export default Providers;
