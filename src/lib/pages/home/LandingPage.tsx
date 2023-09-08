'use client';

import {
  Accordion,
  Box,
  Circle,
  Flex,
  Grid,
  HStack,
  Image,
  VStack,
} from '@chakra-ui/react';
import { CustomCard } from '~/lib/components/Utils/CustomCard';
import { CustomContainer } from '~/lib/components/Utils/CustomContainer';
import { MainHeader } from '~/lib/components/Utils/MainHeader';
import { MainSubTitle } from '~/lib/components/Utils/MainSubTitle';
import { SubscriptionForm } from '~/lib/components/Utils/SubscriptionForm';
import { TextWithDot } from '~/lib/components/Utils/TextWithDot';
import { FaAward, FaHandshake } from 'react-icons/fa';
import { ContentDisplay } from '~/lib/components/Utils/ContentDisplay';
import { CustomAccordion } from '~/lib/components/Utils/CustomAccordion';
import { CustomBtn } from '~/lib/components/Utils/CustomBtn';
import FaqData from '~/lib/components/data/faqData.json';

const LandingPage = () => {
  return (
    <Box>
      <CustomContainer>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          gap="3rem"
          py="3rem"
        >
          <VStack align="flex-start" w="45%" gap="1.5rem">
            <HStack gap="2rem">
              <TextWithDot text="Discover" />
              <TextWithDot text="Connect" dot />
              <TextWithDot text="Simplify" dot />
            </HStack>
            <MainHeader
              text="Welcome to Dara - Your Gateway to Reliable Services!"
              align="left"
              size="3.5rem"
            />
            <MainSubTitle
              text="At Dara, we believe in the power of seamless connections. Our cutting-edge platform is meticulously designed to bridge the gap between discerning customers and skilled service providers. Whether you're in search of a reliable service provider or you're a service provider ready to showcase your expertise, our technology is here to make it happen."
              align="left"
            />
            <SubscriptionForm />
          </VStack>
          <VStack pos="relative" align="flex-end" w="55%">
            <Circle size="24rem">
              <Image
                src="/assets/heroa.png"
                alt="Smiling man"
                w="full"
                h="full"
              />
            </Circle>
            <Circle size="17.5rem" pos="absolute" left="10%" top="38%">
              <Image
                src="/assets/heroc.png"
                alt="Smiling man"
                w="full"
                h="full"
              />
            </Circle>
            <Circle size="20rem">
              <Image
                src="/assets/herob.png"
                alt="Smiling man"
                w="full"
                h="full"
              />
            </Circle>
          </VStack>
        </Flex>
      </CustomContainer>
      <Box bgColor="#EAF1FF" w="full" py="4rem">
        <MainHeader text="Why Choose Dara?" />
        <Flex
          w="90%"
          mx="auto"
          justify="center"
          flexWrap="wrap"
          gap="4rem"
          mt="2.5rem"
        >
          <CustomCard
            bg="#F97316"
            icon={FaAward}
            title="Excellence"
            w="30%"
            text="We're committed to curating a network of top-tier service providers who are masters of their trade."
          />
          <CustomCard
            bg="brand.100"
            icon={FaHandshake}
            title="Trust"
            w="30%"
            text="Your peace of mind matters to us. We rigorously vet every artisan to ensure you're only connected with trustworthy professionals."
          />
          <CustomCard
            bg="#84CC16"
            icon={FaHandshake}
            title="Quality Control"
            w="30%"
            text="Our commitment to quality control defines how our service providers serve clients—delivering excellence and meticulous attention to detail in every interaction"
          />
          <CustomCard
            bg="#A855F7"
            icon={FaAward}
            title="Loyalty"
            w="30%"
            text="We're more than just a platform; we're your loyal companion in your quest for quality services. As a returning customer, unlock exclusive perks and benefits that make your experience even more rewarding"
          />
          <CustomCard
            bg="#EF4444"
            icon={FaAward}
            w="30%"
            title="Customer Service"
            text="Our dedicated support team is here to assist you every step of the way. Your satisfaction is our priority"
          />
        </Flex>
      </Box>
      <CustomContainer>
        <VStack my="8.5rem" gap="14rem">
          <ContentDisplay
            img="/assets/placea.png"
            text="Discover Services Like Never Before"
            sub="Are you tired of sifting through endless options to find the right service provider? Look no further. Our platform simplifies the process with a user-friendly interface that effortlessly matches your needs with experienced artisans in your area. With a single click, you're connected to a world of possibilities."
            btn="Learn more"
          />
          <ContentDisplay
            rtl
            img="/assets/placeb.png"
            text="For Service Providers"
            sub="Join our community of skilled service providers and take your business to new heights. Showcase your expertise, gain exposure, and connect with customers seeking your services. With Dara, you're not just a service provider – you're a solution to someone's needs. Join a community that values excellence, trust, and loyalty."
            btn="Learn more"
          />
        </VStack>

        <Box
          bgColor="brand.100"
          border="20px solid #9CBDFF"
          borderRadius="1.25rem"
          py="4rem"
          pos="relative"
          w="100%"
          mx="auto"
        >
          <VStack w="80%" mx="auto">
            <VStack gap="1.5rem" mb="4rem">
              <MainHeader
                text="Join us in revolutionizing the way you discover and provide services."
                color="white"
              />
              <MainSubTitle
                text="Ready to get started? Download our technology to witness firsthand transformation. Get the App and Embrace the Change!"
                color="white"
              />
              <HStack gap="1.5rem">
                <Image src="/assets/google.png" alt="gplay" />
                <Image src="/assets/appstore.png" alt="appstore" />
              </HStack>
            </VStack>
            <SubscriptionForm color="white" tColor="brand.100" w="60%" />
          </VStack>
          <Image
            src="/assets/fav.png"
            alt="icon"
            pos="absolute"
            left="-5%"
            bottom="-15%"
          />
        </Box>

        <Box mt="12.5rem">
          <ContentDisplay
            img="/assets/placec.png"
            text="Unlock the Power of “Finding service providers near you”"
            sub={`Our tag, "find service provider near me" reflects our commitment to being your go-to resource for all your service needs. Whether it's a skilled plumber, an experience mechanic, an expert hairstylist, or a talented graphic designer, we've got you covered as we ensure you're connected to service providers who are just around the corner. No more long waits or distant travels – we're all about convenience at your doorstep. Say goodbye to uncertainty and hello to reliability.`}
          />
        </Box>

        <Box w="90%" mx="auto" mt="9.5rem">
          <Box mx="auto" w="40%">
            <MainHeader text="Frequently asked questions about Dara" />
          </Box>
          <VStack mt="3.5rem">
            <Accordion
              defaultIndex={[1]}
              // allowMultiple
              gap="0rem"
              display="flex"
              flexDirection="column"
            >
              {FaqData.map((x) => (
                <CustomAccordion title={x.title} content={x.content} />
              ))}
            </Accordion>
            <Flex justify="center" mt="3.5rem">
              <CustomBtn p="2rem 7rem" text="Contact Us" />
            </Flex>
          </VStack>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default LandingPage;