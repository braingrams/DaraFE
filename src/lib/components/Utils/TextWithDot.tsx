import { HStack, Circle, Text } from '@chakra-ui/react';
import React from 'react';
import { ITextWithDot } from '../Schemas';

export const TextWithDot = ({ dot, text }: ITextWithDot) => {
  return (
    <HStack gap="2rem">
      {dot && <Circle size=".75rem" bgColor="brand.100" />}
      <Text fontSize="1.5rem" fontWeight={500} color="brand.100">
        {text}
      </Text>
    </HStack>
  );
};
