import { Box, Flex, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { MainHeader } from '~/lib/components/Utils/MainHeader';
import { MainSubTitle } from '~/lib/components/Utils/MainSubTitle';

export const ThankYou = () => {
  return (
    <Flex h="60vh" justify="center" align="center">
      <VStack w="35%" mx="auto" gap="1.4rem">
        <MainHeader text="ThankYou!" />
        <Box p="1rem" bgColor={'blue.50'} fontSize=".8rem" mb="1rem">
          <MainSubTitle text="Your response has been successfully sent and a customer care agent will contact you within 24 hours. Look out for our email. Thank you for choosing DARA!" />
        </Box>
        <Link href="/" passHref>
          <MainSubTitle text="Back to home" size="1rem" />
        </Link>
      </VStack>
    </Flex>
  );
};
