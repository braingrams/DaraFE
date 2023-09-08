import { Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { IBtnProps } from '../Schemas';

export const CustomBtn = ({
  p = '.9rem 1rem',
  text,
  onClick,
  icon,
  bg,
  color,
}: IBtnProps) => {
  return (
    <Button
      bgColor={bg || 'brand.100'}
      color={color || 'white'}
      borderRadius="55px"
      fontSize=".9rem"
      fontWeight={600}
      fontFamily="Inter"
      p={p}
      onClick={onClick}
    >
      {text} {icon && <Icon as={icon} pl="1rem" />}
    </Button>
  );
};
