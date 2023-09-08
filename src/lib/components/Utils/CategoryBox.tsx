import {
  Avatar,
  Box,
  Button,
  Circle,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { MainHeader } from './MainHeader';
import { BsFillStarFill } from 'react-icons/bs';
import { ICategoryBox } from '../Schemas';

export const CategoryBox = ({
  name,
  src,
  rate,
  job,
  num,
  projects,
}: ICategoryBox) => {
  return (
    <Box borderRadius="1.25rem" border="1px solid #E5E7EB" p=".75rem">
      <HStack>
        <Avatar name={name} src={src} size="4rem" />
        <VStack gap=".5rem">
          <MainHeader text={name} fw={600} align="left" size="1.25rem" />
          <HStack>
            <HStack>
              <Icon as={BsFillStarFill} color="#F59E0B" />
              <Text color="#6B7280">{rate}</Text>
            </HStack>
            <HStack>
              <Circle size=".4rem" bgColor="#6B7280" />
              <Text color="#6B7280">{job}</Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
      <HStack mt=".7rem">
        <Text fontWeight={500} fontSize=".75rem" color="brand.400">
          {num} Recommended
        </Text>
        <HStack>
          <Circle size=".4rem" bgColor="#6B7280" />
          <Text fontWeight={500} fontSize=".75rem" color="brand.400">
            {projects} Completed Projects
          </Text>
        </HStack>
      </HStack>
      <Divider bgColor="#E5E7EB" my=".75rem" />
      <Button
        color="brand.100"
        borderRadius="35px"
        border="2px solid"
        borderColor="brand.100"
        bgColor="transparent"
        w="full"
      >
        Hire Me
      </Button>
    </Box>
  );
};
