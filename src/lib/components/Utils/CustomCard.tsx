import { Box, Circle, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MainSubTitle } from './MainSubTitle';
import { ICustomCard } from '../Schemas';

export const CustomCard = ({ title, bg, icon, text, w, dir }: ICustomCard) => {
  return (
    <VStack
      gap="1.25rem"
      p="1.5rem 1.5rem 3rem"
      align="center"
      bgColor="white"
      borderRadius="1.25rem"
      w={w}
    >
      <HStack flexDir={dir ? 'row' : 'column'} gap="1.25rem">
        <Circle bg={bg} size="5rem">
          <Icon as={icon} color="white" fontSize="2rem" />
        </Circle>
        <Box w="full" textAlign="center">
          <Text fontSize="1.5rem" fontWeight={700} mb=".5rem">
            {title}
          </Text>
          <MainSubTitle text={text} size="1.125rem" />
        </Box>
      </HStack>
    </VStack>
  );
};
