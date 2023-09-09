import { Text } from '@chakra-ui/react';
import React from 'react';

export const FooterHeadings = ({ text }: { text: string }) => {
  return (
    <Text
      fontSize={['.875rem', '1rem']}
      fontWeight="700"
      color="white"
      mb={['.5rem', '0']}
      textTransform="capitalize"
    >
      {text}
    </Text>
  );
};
