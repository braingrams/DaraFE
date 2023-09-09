'use client';

import { VStack, Box } from '@chakra-ui/react';
import React from 'react';
import { ContentDisplay } from '~/lib/components/Utils/ContentDisplay';
import { CustomContainer } from '~/lib/components/Utils/CustomContainer';
import { CustomList } from '~/lib/components/Utils/CustomList';
import { MainHeader } from '~/lib/components/Utils/MainHeader';
import { MainSubTitle } from '~/lib/components/Utils/MainSubTitle';
import { TextWithDot } from '~/lib/components/Utils/TextWithDot';
import features from '~/lib/components/data/features.json';

export const AsClient = () => {
  return (
    <Box>
      <CustomContainer>
        <VStack
          gap={['1rem', '1.5rem']}
          py={['3rem', '7.5rem']}
          borderBottom="1px solid #D1D5DB"
        >
          <TextWithDot text="Use Dara as a Client" />
          <MainHeader
            fw={600}
            w={['70%', 'full']}
            text="Your Gateway to Effortless Service Excellence"
          />
          <MainSubTitle
            w={['90%', '80%']}
            text="Welcome to Dara, the groundbreaking technology that redefines the way you connect with trusted service providers. Our innovative platform empowers you to effortlessly access top-notch services right at your fingertips, making your life easier and more convenient than ever before."
          />
        </VStack>
        <VStack my={['3rem', '7.5rem']} gap={['5rem', '14rem']} w="full">
          <ContentDisplay
            img="/assets/placef.png"
            text="Our Mission"
            gap={['1.5rem', '10rem']}
            sub="Our mission at Dara is clear: we're on a journey to bridge the gap between discerning customers and skilled service providers. We understand the challenges that both parties face in finding each other, and that's where we step in. With Dara, you can wave goodbye to uncertainty and welcome a seamless connection that benefits everyone involved. We're not just here to provide a service; we're here to provide an experience that fosters growth, trust, and satisfaction."
          />
          <ContentDisplay
            rtl
            img="/assets/placeg.png"
            text="Our Vision"
            gap={['1.5rem', '10rem']}
            sub="We see a world where nano business service providers are empowered to expand their horizons. We envision a seamless connection between these providers and individuals in search of exceptional services. Through meticulous organization of their endeavors, we aim to elevate their operations. Our ultimate goal is to foster the creation of unparalleled services, enriching the landscape of quality and excellence."
          />
        </VStack>
      </CustomContainer>
      <Box bgColor="#EAF1FF" w="full" py={['2rem', '4rem']}>
        <Box w={['full', '80%']} mx="auto">
          <MainHeader text="Key Features that Define Dara" />
          <VStack
            w={'90%'}
            mx="auto"
            gap={['.75rem', '1.5rem']}
            my={['1.25rem', '2.5rem']}
          >
            {features.map((x) => (
              <CustomList text={x.title} sub={x.content} key={x.id} />
            ))}
          </VStack>
        </Box>
      </Box>
      <CustomContainer>
        <VStack my={['3rem', '8.5rem']} gap={['5rem', '14rem']} w="full">
          <ContentDisplay
            img="/assets/placeh.png"
            text="Why Choose Dara?"
            gap={['1.5rem', '10rem']}
            sub="Excellence and Transparency: Dara stands for excellence in every service provided. Our service providers are trusted and verified, ensuring top-tier work quality and complete transparency in every interaction."
          />
          <ContentDisplay
            rtl
            img="/assets/placei.png"
            text="Experience the Future Today"
            gap={['1.5rem', '10rem']}
            social
            sub="Dara transforms service provision into a seamless, trustworthy, and convenient experience. Join us in embracing this technological revolution that brings excellence and transparency to the forefront of your service interactions. Unlock the power of Dara and discover a world of unmatched service quality. Your journey towards effortless service excellence starts here"
          />
        </VStack>
      </CustomContainer>
    </Box>
  );
};
