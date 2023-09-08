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
  gap = '4.5rem',
  social,
}: IContentDisplay) => {
  return (
    <HStack justify="space-between" gap={gap}>
      <Box w="full" order={rtl ? 1 : 0}>
        <Image src={img} alt={img} w="full" />
      </Box>
      <VStack w="full" gap="1.5rem" align="flex-start" order={rtl ? 0 : 1}>
        <MainHeader text={text} align={'left'} />
        <MainSubTitle text={sub} align="left" />
        {btn && (
          <CustomBtn text={btn} onClick={onClick} icon={LiaAngleRightSolid} />
        )}
        {social && (
          <HStack>
            <Image src="/assets/google.png" alt="gplay" />
            <Image src="/assets/appstore.png" alt="appstore" />
          </HStack>
        )}
      </VStack>
    </HStack>
  );
};
