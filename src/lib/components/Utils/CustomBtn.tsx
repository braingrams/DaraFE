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
  w,
  type,
  disabled
}: IBtnProps) => {
  return (
    <Button
      bgColor={bg || 'brand.100'}
      color={color || 'white'}
      borderRadius="55px"
      fontSize={['.875rem', '.9rem']}
      fontWeight={600}
      fontFamily="Inter"
      p={p}
      onClick={onClick}
      w={w}
      type={type}
      isDisabled={disabled}
    >
      {text} {icon && <Icon as={icon} />}
    </Button>
  );
};
