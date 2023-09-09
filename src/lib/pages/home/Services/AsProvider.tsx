'use client';
import { VStack, Box, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { CustomContainer } from '~/lib/components/Utils/CustomContainer';
import { CustomList } from '~/lib/components/Utils/CustomList';
import { CustomSteps } from '~/lib/components/Utils/CustomSteps';
import { MainHeader } from '~/lib/components/Utils/MainHeader';
import { MainSubTitle } from '~/lib/components/Utils/MainSubTitle';
import { TextWithDot } from '~/lib/components/Utils/TextWithDot';
import providerFeatures from '~/lib/components/data/providerFeatures.json';

export const AsProvider = () => {
  return (
    <Box>
      <CustomContainer>
        <VStack
          gap={['1rem', '1.5rem']}
          py={['3rem', '7.5rem']}
          borderBottom="1px solid #D1D5DB"
        >
          <TextWithDot text="Use Dara as a Service Provider" />
          <MainHeader
            fw={600}
            w={['70%', 'full']}
            text="Revolutionizing How You Connect with Clients"
          />
          <MainSubTitle
            w={['90%', '80%']}
            text="Are you a service provider looking to take your business to the next level? Look no further than Dara –your ultimate platform for connecting with clients and showcasing your skills like never before. With our innovative technology, you'll find the process of attracting, engaging, and securing clients simpler and more rewarding than ever."
          />
        </VStack>
        <HStack my={['3rem', '7.5rem']} gap="4.7rem" w="full">
          <Box w="full" display={['none', 'block']}>
            <Image src="/assets/placej.png" alt="large hero" w="full" />
          </Box>
          <VStack w="full" gap={['1.25rem', '1.5rem']} align="flex-start">
            <MainHeader
              text="Key Features That Set Dara Apart"
              align={['center', 'left']}
            />
            {providerFeatures.map((x) => (
              <CustomList text={x.title} sub={x.content} key={x.id} />
            ))}
          </VStack>
        </HStack>
        <Box my={['5rem', '6.5rem']} w="90%" mx="auto">
          <MainHeader text="How Dara Works" fw="600" />
          <VStack mt={['1.62rem', '3rem']} gap={['.5rem', '1.25rem']} w="full">
            <CustomSteps
              bg="brand.100"
              num="1"
              sub="Build a professional profile that highlights your expertise, experience, and accomplishments."
              title="Create Your Profile"
              rtl
              h={['5rem', '10rem']}
            />
            <CustomSteps
              bg="#F97316"
              num="2"
              sub="Share your projects and services on your scrolling portfolio page."
              title="Showcase Your Work"
              h={['5rem', '10rem']}
            />
            <CustomSteps
              bg="#84CC16"
              num="3"
              sub="Engage in calls and chats to discuss projects and understand client needs."
              title="Connect with Clients"
              rtl
              h={['5rem', '10rem']}
            />
            <CustomSteps
              bg="#A855F7"
              num="4"
              sub="Receive payment directly into your wallet, ensuring a secure and efficient transaction process."
              title="Secure Payments"
              h={['5rem', '10rem']}
            />
            <CustomSteps
              bg="#EF4444"
              num="5"
              sub="Benefit from the rating system and enhanced visibility within the Dara community"
              title="Earn Trust and Visibility"
              rtl
              h="0rem"
            />
          </VStack>
        </Box>
        <VStack pt={['0rem', '8.5rem']} gap={['.75rem', '1.5rem']}>
          <MainHeader
            w={['full', '70%']}
            fw="600"
            text="Join Dara today and experience the future of client-service provider interactions."
          />
          <MainSubTitle
            w={['full', '60%']}
            text="Elevate your online presence, streamline your workflow, and grow your business with Dara's cutting-edge technology. Your success starts here. Ready to take the next step? Sign up for Dara and transform the way you connect with clients."
          />
          <HStack justify="center" gap={['1rem', '1.5rem']}>
            <Image src="/assets/google.png" alt="gplay" h={['2rem', 'full']} />
            <Image
              src="/assets/appstore.png"
              alt="appstore"
              h={['2rem', 'full']}
            />
          </HStack>
        </VStack>
      </CustomContainer>
    </Box>
  );
};
