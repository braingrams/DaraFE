import { Flex, Input, Box } from '@chakra-ui/react';
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
    <Box w={w}>
      <Flex
        border="1px solid "
        borderColor={color || '#e5e7eb'}
        borderRadius={['10px', '45px']}
        h={['3rem', '4rem']}
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
          fontSize={['.75rem', '1rem']}
          _placeholder={{
            color: color,
          }}
        />
        <Box display={['none', 'block']}>
          <CustomBtn
            text="Submit"
            p=".9rem 3rem"
            bg={color || 'brand.100'}
            color={tColor}
          />
        </Box>
      </Flex>
      <Flex display={['flex', 'none']} justify="center" mt="1rem">
        <CustomBtn
          text="Submit"
          p="1.5rem 4rem"
          bg={color || 'brand.100'}
          color={tColor}
        />
      </Flex>
    </Box>
  );
};
