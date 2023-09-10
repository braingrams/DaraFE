'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';

export const Subscribe = () => {
  return (
    <Box mt={['3rem', '7rem']}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdq5A2nMIYZBH8stGBcH-xbXQoF5s9O4t9J1T4ADSxUP269mQ/viewform?embedded=true"
        width="100%"
        height="2050"
        id="googleForm"
      >
        Loading…
      </iframe>
    </Box>
  );
};
