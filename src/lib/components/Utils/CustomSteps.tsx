import { Circle, HStack, VStack, Box } from '@chakra-ui/react';
import React from 'react';
import { MainHeader } from './MainHeader';
import { MainSubTitle } from './MainSubTitle';
import { ICustomSteps } from '../Schemas';

export const CustomSteps = ({ rtl, bg, title, sub, num, h }: ICustomSteps) => {
  return (
    <HStack
      gap={['.5rem', '2.5rem']}
      ml={['0', rtl ? '0rem' : '9.5rem']}
      flexDir={[rtl ? 'column-reverse' : 'column', 'row']}
    >
      <VStack
        order={rtl ? 1 : 0}
        w="full"
        align={['center', rtl ? 'flex-start' : 'flex-end']}
      >
        <VStack gap={['.5rem', '1.25rem']}>
          <Circle
            bg={bg}
            size={['1.5rem', '2.25rem']}
            fontSize={['.87rem', '1.5rem']}
            fontWeight={500}
            color="white"
          >
            {num}
          </Circle>
          <Box
            h={h}
            borderLeft="1px dashed #6B7280"
            display={['none', 'block']}
          />
        </VStack>
      </VStack>
      <VStack
        gap=".5rem"
        align={rtl ? 'right' : 'left'}
        order={rtl ? 0 : 1}
        w="full"
      >
        <MainHeader
          size={['.875rem', '1.5rem']}
          fw="600"
          align={['center', rtl ? 'right' : 'left']}
          text={title}
        />
        <MainSubTitle text={sub} align={['center', rtl ? 'right' : 'left']} />
        <Box
          h={h}
          borderLeft="1px dashed #6B7280"
          display={['block', 'none']}
          mx="auto"
        />
      </VStack>
    </HStack>
  );
};
