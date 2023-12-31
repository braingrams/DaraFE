import { HStack, Icon, VStack } from '@chakra-ui/react';
import React from 'react';
import { MainHeader } from './MainHeader';
import { MainSubTitle } from './MainSubTitle';
import { ICustomList } from '../Schemas';
import { FaCircleCheck } from 'react-icons/fa6';

export const CustomList = ({ text, sub }: ICustomList) => {
  return (
    <HStack align="flex-start" gap={['.5rem', '1.25rem']}>
      <Icon
        as={FaCircleCheck}
        color="brand.100"
        fontSize={['1rem', '1.5rem']}
      />
      <VStack gap={['.25rem', '.5rem']}>
        <MainHeader
          size={['.875rem', '1.5rem']}
          text={text}
          align="left"
          fw={[700, 600]}
        />
        <MainSubTitle text={sub} align="left" />
      </VStack>
    </HStack>
  );
};
