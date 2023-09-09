import { Box, HStack, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import { MainHeader } from './MainHeader';
import { MainSubTitle } from './MainSubTitle';
import { CustomBtn } from './CustomBtn';
import { IContentDisplay } from '../Schemas';
import { LiaAngleRightSolid } from 'react-icons/lia';

export const ContentDisplay = ({
  rtl,
  img,
  text,
  sub,
  btn,
  onClick,
  gap = ['1.5rem', '4.5rem'],
  social,
}: IContentDisplay) => {
  return (
    <HStack
      justify={['center', 'space-between']}
      gap={gap}
      flexDir={[rtl ? 'column-reverse' : 'column', 'row']}
    >
      <Box w="full" order={rtl ? 1 : 0}>
        <Image src={img} alt={img} w="full" />
      </Box>
      <VStack
        w="full"
        gap={['.75rem', '1.5rem']}
        align={['center', 'flex-start']}
        order={rtl ? 0 : 1}
      >
        <MainHeader text={text} align={['center', 'left']} w="90%" />
        <MainSubTitle text={sub} align={['center', 'left']} />
        {btn && (
          <CustomBtn
            text={btn}
            onClick={onClick}
            icon={LiaAngleRightSolid}
            p={['1.5rem 3rem', '.9rem 1rem']}
          />
        )}
        {social && (
          <HStack>
            <Image
              src="/assets/google.png"
              alt="gplay"
              h={['2.5rem', 'full']}
            />
            <Image
              src="/assets/appstore.png"
              alt="appstore"
              h={['2.5rem', 'full']}
            />
          </HStack>
        )}
      </VStack>
    </HStack>
  );
};
