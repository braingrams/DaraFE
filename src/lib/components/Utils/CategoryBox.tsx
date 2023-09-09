import {
  Avatar,
  Box,
  Button,
  Circle,
  Divider,
  Flex,
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
    <Flex
      borderRadius="1.25rem"
      border="1px solid #E5E7EB"
      p=".75rem"
      flexDir={['row', 'column']}
      justify="space-between"
      align="center"
    >
      <HStack>
        <Avatar name={name} src={src} size={['3rem', '4rem']} />
        <VStack gap={['.25rem', '.5rem']} align="flex-start">
          <MainHeader
            text={name}
            fw={600}
            align="left"
            size={['.875rem', '1.25rem']}
          />
          <HStack>
            <HStack>
              <Icon
                as={BsFillStarFill}
                color="#F59E0B"
                fontSize={['.62rem', '1rem']}
              />
              <Text color="#6B7280" fontSize={['.62rem', '1rem']}>
                {rate}
              </Text>
            </HStack>
            <HStack>
              <Circle size={['.25rem', '.4rem']} bgColor="#6B7280" />
              <Text color="#6B7280" fontSize={['.62rem', '1rem']}>
                {job}
              </Text>
            </HStack>
          </HStack>
          <HStack display={['flex', 'none']}>
            <Text
              fontWeight={500}
              fontSize={['.5rem', '.75rem']}
              color="brand.400"
            >
              {num} Recommended
            </Text>
            <HStack>
              <Circle size={['.25rem', '.4rem']} bgColor="#6B7280" />
              <Text
                fontWeight={500}
                fontSize={['.5rem', '.75rem']}
                color="brand.400"
              >
                {projects} Completed Projects
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
      <HStack mt=".7rem" display={['none', 'flex']}>
        <Text fontWeight={500} fontSize={['.5rem', '.75rem']} color="brand.400">
          {num} Recommended
        </Text>
        <HStack>
          <Circle size={['.25rem', '.4rem']} bgColor="#6B7280" />
          <Text
            fontWeight={500}
            fontSize={['.5rem', '.75rem']}
            color="brand.400"
          >
            {projects} Completed Projects
          </Text>
        </HStack>
      </HStack>
      <Divider bgColor="#E5E7EB" my=".75rem" display={['none', 'block']} />
      <Button
        color="brand.100"
        borderRadius="35px"
        border="2px solid"
        borderColor="brand.100"
        bgColor="transparent"
        w={['fit-content', 'full']}
        fontSize={['.75rem', '1rem']}
      >
        Hire Me
      </Button>
    </Flex>
  );
};
