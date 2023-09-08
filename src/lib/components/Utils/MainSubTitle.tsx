import { Text } from '@chakra-ui/react';
import React from 'react';
import { IMainHeader } from '../Schemas';

export const MainSubTitle = ({
  size = '1.25rem',
  text,
  align = 'center',
  color = 'brand.400',
  w = 'full',
}: IMainHeader) => {
  return (
    <Text
      fontSize={size}
      fontWeight={400}
      letterSpacing=".00618rem"
      lineHeight="normal"
      textAlign={align}
      color={color}
      w={w}
    >
      {text}
    </Text>
  );
};
