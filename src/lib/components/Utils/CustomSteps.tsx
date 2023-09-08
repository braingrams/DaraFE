import { Circle, HStack, VStack, Box } from '@chakra-ui/react';
import React from 'react';
import { MainHeader } from './MainHeader';
import { MainSubTitle } from './MainSubTitle';
import { ICustomSteps } from '../Schemas';

export const CustomSteps = ({ rtl, bg, title, sub, num, h }: ICustomSteps) => {
  return (
    <HStack gap="2.5rem" ml={rtl ? '0rem' : '9.5rem'}>
      <VStack
        order={rtl ? 1 : 0}
        w="full"
        align={rtl ? 'flex-start' : 'flex-end'}
      >
        <VStack gap="1.25rem">
          <Circle
            bg={bg}
            size="2.25rem"
            fontSize="1.5rem"
            fontWeight={500}
            color="white"
          >
            {num}
          </Circle>
          <Box h={h} borderLeft="1px dashed #6B7280" />
        </VStack>
      </VStack>
      <VStack
        gap=".5rem"
        align={rtl ? 'right' : 'left'}
        order={rtl ? 0 : 1}
        w="full"
      >
        <MainHeader
          size="1.5rem"
          fw="600"
          align={rtl ? 'right' : 'left'}
          text={title}
        />
        <MainSubTitle text={sub} align={rtl ? 'right' : 'left'} />
      </VStack>
    </HStack>
  );
};
