import { Flex, Input } from '@chakra-ui/react';
import React from 'react';
import { CustomBtn } from './CustomBtn';

export const SubscriptionForm = ({
  color,
  tColor,
  w = 'full',
}: {
  color?: any;
  tColor?: any;
  w?: any;
}) => {
  return (
    <Flex
      border="1px solid "
      borderColor={color || '#e5e7eb'}
      borderRadius="45px"
      h="4rem"
      align="center"
      justify="space-between"
      w={w}
      px="1rem"
      color={color || '#e5e7eb'}
    >
      <Input
        border="0"
        placeholder="Enter your email address to join our waitlist!"
        color={color || '#e5e7eb'}
        _placeholder={{
          color: color,
        }}
      />
      <CustomBtn
        text="Submit"
        p=".9rem 3rem"
        bg={color || 'brand.100'}
        color={tColor}
      />
    </Flex>
  );
};
