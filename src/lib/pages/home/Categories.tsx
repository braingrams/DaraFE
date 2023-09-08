'use client';
import {
  VStack,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  HStack,
  Text,
  Checkbox,
  Select,
  Grid,
  Radio,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { CategoryBox } from '~/lib/components/Utils/CategoryBox';
import { CustomBtn } from '~/lib/components/Utils/CustomBtn';
import { CustomContainer } from '~/lib/components/Utils/CustomContainer';
import CustomRating from '~/lib/components/Utils/CustomRating';
import { FilterHeadings } from '~/lib/components/Utils/Filters/FilterHeadings';
import { MainHeader } from '~/lib/components/Utils/MainHeader';
import { TextWithDot } from '~/lib/components/Utils/TextWithDot';

export const Categories = () => {
  const [isCategory, setIsCategory] = useState(true);
  const [isRatings, setisRatings] = useState(true);
  const [isLocation, setisLocation] = useState(true);
  return (
    <Box>
      <CustomContainer>
        <VStack gap="1.5rem" py="7.5rem" borderBottom="1px solid #D1D5DB">
          <TextWithDot text="Categories" />
          <MainHeader
            fw={600}
            w="80%"
            text="Connect with well-trained, verified artisans and skilled professionals"
          />
          <InputGroup w="50%">
            <InputLeftElement top="20%">
              <Icon as={BsSearch} />
            </InputLeftElement>
            <Input
              border="1px solid #E5E7EB"
              borderRadius="35px"
              placeholder="Search"
              h="4rem"
              w="full"
            />
          </InputGroup>
        </VStack>
        <Box my="4.75rem">
          <Flex gap="1.5rem">
            <Box w="20%">
              <HStack gap="1.5rem" mb="1.5rem">
                <Text fontSize="1.25rem" fontWeight={500}>
                  Filter
                </Text>
                <CustomBtn
                  text="Clear Filter"
                  bg="#f3f4f6"
                  color="#9CA3AF"
                  p="1rem 3rem"
                />
              </HStack>
              <VStack
                gap="2rem"
                p="1.5rem"
                borderRadius="1.25rem"
                border="1px solid #E5E7EB"
                align="flex-start"
                w="full"
              >
                <Box w="full">
                  <FilterHeadings
                    title="Categories"
                    onClick={() => setIsCategory(!isCategory)}
                  />
                  {isCategory && (
                    <VStack
                      gap=".75rem"
                      align="flex-start"
                      h="14rem"
                      overflow="auto"
                    >
                      <Checkbox size="md" colorScheme="brand">
                        Plumbing
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Car Repairs
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Electric Works
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Carpentry
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Chef
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Painting
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Web Development
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Graphics Design
                      </Checkbox>
                    </VStack>
                  )}
                </Box>
                <Box w="full">
                  <FilterHeadings
                    title="Ratings"
                    onClick={() => setisRatings(!isRatings)}
                  />
                  {isRatings && (
                    <VStack
                      gap=".75rem"
                      align="flex-start"
                      h="14rem"
                      overflow="auto"
                    >
                      <Radio value="1">
                        <HStack>
                          <CustomRating value={4.5} />
                          <Text fontSize=".875rem" fontWeight={500}>
                            4.5 & above
                          </Text>
                        </HStack>
                      </Radio>
                      <Radio value="1" fontSize=".875rem">
                        <HStack>
                          <CustomRating value={4.0} />
                          <Text fontSize=".875rem" fontWeight={500}>
                            4.0 & above
                          </Text>
                        </HStack>
                      </Radio>
                      <Radio value="1" fontSize=".875rem">
                        <HStack>
                          <CustomRating value={3.5} />
                          <Text fontSize=".875rem" fontWeight={500}>
                            3.5 & above
                          </Text>
                        </HStack>
                      </Radio>
                      <Radio value="1" fontSize=".875rem">
                        <HStack>
                          <CustomRating value={3.0} />
                          <Text fontSize=".875rem" fontWeight={500}>
                            3.0 & above
                          </Text>
                        </HStack>
                      </Radio>
                      <Radio value="1" fontSize=".875rem">
                        <HStack>
                          <CustomRating value={2.5} />
                          <Text fontSize=".875rem" fontWeight={500}>
                            2.5 & above
                          </Text>
                        </HStack>
                      </Radio>
                    </VStack>
                  )}
                </Box>
                <Box w="full">
                  <FilterHeadings
                    title="Location"
                    onClick={() => setisLocation(!isLocation)}
                  />
                  {isLocation && (
                    <VStack
                      gap=".75rem"
                      align="flex-start"
                      h="14rem"
                      overflow="auto"
                    >
                      <Checkbox size="md" colorScheme="brand">
                        Lagos
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Abuja
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Ibadan
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Port Harcourt
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Jos
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Calabar
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Kano
                      </Checkbox>
                      <Checkbox size="md" colorScheme="brand">
                        Uyo
                      </Checkbox>
                    </VStack>
                  )}
                </Box>
              </VStack>
            </Box>
            <Box w="80%">
              <HStack gap="1.5rem" justify="flex-end" w="full" mb="1.5rem">
                <Text fontSize="1rem" fontWeight={500} color="#6B7280">
                  Sort by:
                </Text>
                <Select
                  border="1px solid #e5e7eb"
                  borderRadius="1.5rem"
                  w="20%"
                >
                  <option>Most popular</option>
                </Select>
              </HStack>
              <Grid templateColumns={['1fr', 'repeat(3,1fr)']} gap="1.5rem">
                {Array(15)
                  .fill(15)
                  ?.map((x: any, i) => (
                    <CategoryBox
                      key={i}
                      name="Daniel Smith"
                      job="Plumber"
                      num="20"
                      projects="51"
                      rate="4.8"
                      src="/assets/avatar.png"
                    />
                  ))}
              </Grid>
            </Box>
          </Flex>
        </Box>
      </CustomContainer>
    </Box>
  );
};
