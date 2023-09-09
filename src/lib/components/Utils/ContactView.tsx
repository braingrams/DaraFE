import { Circle, HStack, Icon, VStack } from '@chakra-ui/react';
import React from 'react';
import { MainSubTitle } from './MainSubTitle';
import { MainHeader } from './MainHeader';
import { ICustomContact } from '../Schemas';

export const ContactView = ({ icon, title, text }: ICustomContact) => {
  return (
    <HStack>
      <Circle
        size={['2.25rem', '3rem']}
        border="1px solid"
        borderColor="#286FFF"
      >
        <Icon as={icon} color="brand.100" fontSize={['1rem', '1.5rem']} />
      </Circle>
      <VStack gap=".25rem">
        <MainSubTitle size={['.62rem', '.875rem']} text={title} align="left" />
        <MainHeader
          size={['.87rem', '1.25rem']}
          fw="600"
          text={text}
          align="left"
        />
      </VStack>
    </HStack>
  );
};
