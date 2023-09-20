'use client';

import { Box, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import { MainHeader } from '../../components/Utils/MainHeader';
import { MainSubTitle } from '../../components/Utils/MainSubTitle';
import { TextWithDot } from '../../components/Utils/TextWithDot';
import { ContentDisplay } from '../../components/Utils/ContentDisplay';
import { FaAward, FaHandshake } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdLoyalty, MdOutlineControlPointDuplicate } from 'react-icons/md';
import { CustomCard } from '../../components/Utils/CustomCard';
import { CustomBtn } from '../../components/Utils/CustomBtn';
import { CustomContainer } from '~/lib/components/Utils/CustomContainer';
import Link from 'next/link';

export const AboutUs = () => {
  return (
    <Box>
      <CustomContainer>
        <VStack
          gap={['1rem', '1.5rem']}
          py={['3rem', '7.5rem']}
          borderBottom="1px solid #D1D5DB"
        >
          <TextWithDot text="About Us" />
          <MainHeader
            fw={600}
            w={['70%', 'full']}
            text="Introducing Dara: Bridging Excellence in Services"
          />
          <MainSubTitle
            w={['90%', '80%']}
            text="At Dara, we're not just a platform; we're a bridge of excellence connecting nano and small business service providers with individuals seeking top-notch services. As a social gig platform, our purpose is simple yet impactful: to bring verified and trusted artisans and professional service providers together with clients who value quality."
          />
        </VStack>
        <VStack my={['3rem', '7.5rem']} gap={['5rem', '14rem']} w="full">
          <ContentDisplay
            img="/assets/placed.png"
            text="Our Mission"
            gap={['1.5rem', '10rem']}
            sub="Our mission at Dara is clear: we're on a journey to bridge the gap between discerning customers and skilled service providers. We understand the challenges that both parties face in finding each other, and that's where we step in. With Dara, you can wave goodbye to uncertainty and welcome a seamless connection that benefits everyone involved. We're not just here to provide a service; we're here to provide an experience that fosters growth, trust, and satisfaction."
          />
          <ContentDisplay
            rtl
            img="/assets/placee.png"
            text="Our Vision"
            gap={['1.5rem', '10rem']}
            sub="We see a world where nano business service providers are empowered to expand their horizons. We envision a seamless connection between these providers and individuals in search of exceptional services. Through meticulous organization of their endeavors, we aim to elevate their operations. Our ultimate goal is to foster the creation of unparalleled services, enriching the landscape of quality and excellence."
          />
        </VStack>
      </CustomContainer>
      <Box bgColor="#EAF1FF" w="full" py={['2rem', '4rem']}>
        <MainHeader text="Our Values" />
        <Flex
          w="90%"
          mx="auto"
          justify="center"
          flexWrap="wrap"
          gap={['2rem', '4rem']}
          mt={['1.5rem', '2.5rem']}
        >
          <CustomCard
            bg="#F97316"
            icon={FaAward}
            title="Excellence"
            w={['full', '45%']}
            dir
            text="We believe in delivering nothing short of excellence. Whether you're a service provider showcasing your craft or a customer seeking assistance, excellence is at the core of everything we do. We're dedicated to raising the bar and setting new standards."
          />
          <CustomCard
            bg="brand.100"
            icon={FaHandshake}
            title="Trust"
            w={['full', '45%']}
            dir
            text="Trust is the foundation of any successful relationship, and we're committed to building and nurturing that trust. Every service provider on our platform undergoes a thorough verification process, ensuring that you can confidently choose from a pool of trusted professionals."
          />
          <CustomCard
            bg="#84CC16"
            icon={MdOutlineControlPointDuplicate}
            title="Quality Control"
            w={['full', '45%']}
            dir
            text="Quality control is the cornerstone of our values, shaping how our service providers cater to our clients. With meticulous attention to detail and unwavering commitment to excellence, we ensure that every interaction is a testament to our dedication to delivering top-tier services."
          />
          <CustomCard
            bg="#A855F7"
            icon={MdLoyalty}
            title="Loyalty"
            w={['full', '45%']}
            dir
            text="Loyalty is earned through consistency, and we're loyal to our commitment of providing value. We're here to stand by you, whether you're a service provider striving for recognition or a customer searching for reliable solutions. Your loyalty to us is reciprocated with unwavering support."
          />
          <CustomCard
            bg="#EF4444"
            icon={RiCustomerService2Line}
            w={['full', '45%']}
            dir
            title="Customer Service"
            text="You're not just a user on our platform; you're part of the Dara family. Our customer service isn't just a department; it's an attitude that defines how we treat you. Your needs and concerns are our priority, and we're here to assist you every step of the way"
          />
        </Flex>
      </Box>
      <CustomContainer>
        <VStack pt={['5rem', '8.5rem']} gap={['.75rem', '1.5rem']}>
          <MainHeader
            w={['full', '70%']}
            fw="600"
            text="Join us on this journey of connection, growth, and mutual success."
          />
          <MainSubTitle
            w={['full', '60%']}
            text="Let's bridge the gap between talent and demand, one excellent service at a time. Welcome to Dara, where excellence finds its true match."
          />
          <Link href={'/contact-us'} passHref>
            <CustomBtn p={['1rem 3rem', '2rem 7rem']} text="Contact Us" />
          </Link>
        </VStack>
      </CustomContainer>
    </Box>
  );
};
