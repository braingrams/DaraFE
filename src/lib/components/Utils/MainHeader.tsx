import { Text } from '@chakra-ui/react';
import React from 'react';
import { IMainHeader } from '../Schemas';

export const MainHeader = ({
  size = '3rem',
  text,
  align = 'center',
  color = 'brand.300',
  w = 'full',
  fw = '700',
}: IMainHeader) => {
  return (
    <Text
      fontSize={size}
      fontWeight={fw}
      letterSpacing=".018rem"
      lineHeight="normal"
      textAlign={align}
      color={color}
      w={w}
    >
      {text}
    </Text>
  );
};
