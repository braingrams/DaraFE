'use client';
import { Flex, Input, Box } from '@chakra-ui/react';
import React from 'react';
import { CustomBtn } from './CustomBtn';
import { useRouter } from 'next/navigation';

export const SubscriptionForm = ({
  color,
  tColor,
  w = 'full',
}: {
  color?: any;
  tColor?: any;
  w?: any;
}) => {
  const router = useRouter();
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
        display="none"
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
      <Flex
        display={['flex', 'flex']}
        justify={['center', 'flex-start']}
        // mt="1rem"
      >
        <CustomBtn
          text="Sign up as a service provider"
          p="1.5rem 4rem"
          bg={color || 'brand.100'}
          color={tColor}
          onClick={() => router.push('/subscribe')}
        />
      </Flex>
    </Box>
  );
};
