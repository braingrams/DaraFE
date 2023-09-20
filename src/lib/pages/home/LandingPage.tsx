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
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdLoyalty, MdOutlineControlPointDuplicate } from 'react-icons/md';
import { ContentDisplay } from '~/lib/components/Utils/ContentDisplay';
import { CustomAccordion } from '~/lib/components/Utils/CustomAccordion';
import { CustomBtn } from '~/lib/components/Utils/CustomBtn';
import FaqData from '~/lib/components/data/faqData.json';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();
  return (
    <Box>
      <CustomContainer>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          gap="3rem"
          py="3rem"
          flexDirection={['column-reverse', 'row']}
        >
          <VStack
            align={['center', 'flex-start']}
            w={['full', '45%']}
            gap={['1rem', '1.5rem']}
          >
            <HStack gap={['1rem', '2rem']}>
              <TextWithDot text="Discover" />
              <TextWithDot text="Connect" dot />
              <TextWithDot text="Simplify" dot />
            </HStack>
            <MainHeader
              text="Welcome to Dara - Your Gateway to Reliable Services!"
              align={['center', 'left']}
              size={['1.25rem', '3.5rem']}
            />
            <MainSubTitle
              text="At Dara, we believe in the power of seamless connections. Our cutting-edge platform is meticulously designed to bridge the gap between discerning customers and skilled service providers. Whether you're in search of a reliable service provider or you're a service provider ready to showcase your expertise, our technology is here to make it happen."
              align={['center', 'left']}
            />
            <SubscriptionForm />
          </VStack>
          <VStack
            pos="relative"
            align={['center', 'flex-end']}
            w={['full', '55%']}
            gap={['0', '2rem']}
          >
            <Image
              src="/assets/heros.png"
              alt="Main hero banner"
              w={['95%', '80%']}
              h="full"
            />
            {/* <Circle size={['13rem', '24rem']}>
              <Image
                src="/assets/heroa.png"
                alt="Smiling man"
                w="full"
                h="full"
              />
            </Circle>
            <Circle
              size={['10rem', '17.5rem']}
              pos="absolute"
              left={['0%', '15%']}
              top="38%"
            >
              <Image
                src="/assets/heroc.png"
                alt="Smiling man"
                w="full"
                h="full"
              />
            </Circle>
            <Circle size={['11.5rem', '20rem']}>
              <Image
                src="/assets/herob.png"
                alt="Smiling man"
                w="full"
                h="full"
              />
            </Circle> */}
          </VStack>
        </Flex>
      </CustomContainer>
      <Box bgColor="#EAF1FF" w="full" py={['1.5rem', '4rem']}>
        <MainHeader text="Why Choose Dara?" fw={600} />
        <Flex
          w="90%"
          mx="auto"
          justify="center"
          flexWrap="wrap"
          gap={['2rem', '4rem']}
          mt="2.5rem"
        >
          <CustomCard
            bg="#F97316"
            icon={FaAward}
            title="Excellence"
            w={['100%', '30%']}
            text="We're committed to curating a network of top-tier service providers who are masters of their trade."
          />
          <CustomCard
            bg="brand.100"
            icon={FaHandshake}
            title="Trust"
            w={['100%', '30%']}
            text="Your peace of mind matters to us. We rigorously vet every artisan to ensure you're only connected with trustworthy professionals."
          />
          <CustomCard
            bg="#84CC16"
            icon={MdOutlineControlPointDuplicate}
            title="Quality Control"
            w={['100%', '30%']}
            text="Our commitment to quality control defines how our service providers serve clients—delivering excellence and meticulous attention to detail in every interaction"
          />
          <CustomCard
            bg="#A855F7"
            icon={MdLoyalty}
            title="Loyalty"
            w={['100%', '30%']}
            text="We're more than just a platform; we're your loyal companion in your quest for quality services. As a returning customer, unlock exclusive perks and benefits that make your experience even more rewarding"
          />
          <CustomCard
            bg="#EF4444"
            icon={RiCustomerService2Line}
            w={['100%', '30%']}
            title="Customer Service"
            text="Our dedicated support team is here to assist you every step of the way. Your satisfaction is our priority"
          />
        </Flex>
      </Box>
      <CustomContainer>
        <VStack my={['5rem', '8.5rem']} gap={['5rem', '14rem']}>
          <ContentDisplay
            img="/assets/placea.png"
            text="Discover Services Like Never Before"
            sub="Are you tired of sifting through endless options to find the right service provider? Look no further. Our platform simplifies the process with a user-friendly interface that effortlessly matches your needs with experienced artisans in your area. With a single click, you're connected to a world of possibilities."
            btn="Learn more"
            onClick={() => router.push('/services/as-a-client')}
          />
          <ContentDisplay
            rtl
            img="/assets/placeb.png"
            text="For Service Providers"
            sub="Join our community of skilled service providers and take your business to new heights. Showcase your expertise, gain exposure, and connect with customers seeking your services. With Dara, you're not just a service provider – you're a solution to someone's needs. Join a community that values excellence, trust, and loyalty."
            btn="Learn more"
            onClick={() => router.push('/services/as-a-service-provider')}
          />
        </VStack>

        <Box
          bgColor="brand.100"
          border={['8px solid #9cbdff', '20px solid #9CBDFF']}
          borderRadius="1.25rem"
          py={['2rem', '4rem']}
          pos="relative"
          w={['97%', '93%']}
          mx="auto"
        >
          <VStack w="80%" mx="auto">
            <VStack gap={['1rem', '1.5rem']} mb={['2rem', '4rem']}>
              <MainHeader
                text="Join us in revolutionizing the way you discover and provide services."
                color="white"
              />
              <MainSubTitle
                text="Ready to get started? Download our technology to witness firsthand transformation. Get the App and Embrace the Change!"
                color="white"
              />
              <HStack gap={['1rem', '1.5rem']}>
                <Image
                  src="/assets/google.png"
                  alt="gplay"
                  h={['2rem', 'full']}
                />
                <Image
                  src="/assets/appstore.png"
                  alt="appstore"
                  h={['2rem', 'full']}
                />
              </HStack>
            </VStack>
            <Flex
              justify="center"
              w={['full', '30%']}
              mx="auto"
              pb={['3rem', '0']}
            >
              <SubscriptionForm
                color="white"
                tColor="brand.100"
                w={['full', 'full']}
              />
            </Flex>
          </VStack>
          <Image
            src="/assets/fav.png"
            alt="icon"
            pos="absolute"
            left={['-4%', '-5%']}
            bottom={['-4%', '-13%']}
            h={['5.6rem', '21rem']}
          />
        </Box>

        <Box mt={['5.4rem', '12.5rem']}>
          <ContentDisplay
            img="/assets/placec.png"
            text="Unlock the Power of “Finding service providers near you”"
            sub={`Our tag, "find service provider near me" reflects our commitment to being your go-to resource for all your service needs. Whether it's a skilled plumber, an experience mechanic, an expert hairstylist, or a talented graphic designer, we've got you covered as we ensure you're connected to service providers who are just around the corner. No more long waits or distant travels – we're all about convenience at your doorstep. Say goodbye to uncertainty and hello to reliability.`}
          />
        </Box>

        <Box w={['full', '90%']} mx="auto" mt={['5rem', '9.5rem']}>
          <Box mx="auto" w={['full', '50%']}>
            <MainHeader text="Frequently asked questions about Dara" />
          </Box>
          <VStack mt={['1.5rem', '3.5rem']}>
            <Accordion
              defaultIndex={[0]}
              // allowMultiple
              gap="0rem"
              display="flex"
              flexDirection="column"
            >
              {FaqData.map((x) => (
                <CustomAccordion
                  key={x.id}
                  title={x.title}
                  content={x.content}
                />
              ))}
            </Accordion>
            <Flex justify="center" mt={['1.5rem', '3.5rem']}>
              <Link href={'/contact-us'} passHref>
                <CustomBtn p={['1rem 3rem', '2rem 7rem']} text="Contact Us" />
              </Link>
            </Flex>
          </VStack>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default LandingPage;
