import { Text } from '@chakra-ui/react';
import React from 'react';

export const FooterHeadings = ({ text }: { text: string }) => {
  return (
    <Text
      fontSize="1rem"
      fontWeight="700"
      color="white"
      mb="0"
      textTransform="capitalize"
    >
      {text}
    </Text>
  );
};
