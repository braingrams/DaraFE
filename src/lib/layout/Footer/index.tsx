import {
  Box,
  Grid,
  HStack,
  Text,
  VStack,
  Image,
  Divider,
} from '@chakra-ui/react';
import { AiFillInstagram } from 'react-icons/ai';
import { FooterHeadings } from './FooterHeadings';
import { FooterIcons } from './FooterIcons';
import { FooterMenuItems } from './FooterMenuItems';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <Box
      w="100%"
      py={['2rem', '3.5rem']}
      bgColor="brand.100"
      mt={['5rem', '9.5rem']}
    >
      <HStack
        align="flex-start"
        w={['90%', '90%']}
        mx="auto"
        justify="space-between"
        flexDir={['column', 'row']}
      >
        <VStack align="flex-start" w={['full', '40%']}>
          <Box ml="-.5rem">
            <Image
              src="/assets/logob.png"
              alt="logo image"
              h={['2.5rem', '4.5rem']}
            />
          </Box>
          <Text
            fontSize={['.62rem', '1rem']}
            lineHeight={['.75rem', '1.5rem']}
            color="white"
            w={['full', '80%']}
          >
            Dara is a social gig platform, connecting verified and trusted
            artisans and professional service providers with clients.
          </Text>
        </VStack>

        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
          gap="2rem"
          w={['full', '60%']}
          justifyContent="flex-end"
          mt="1rem"
        >
          <VStack spacing="0" gap="0.75rem" align="flex-start">
            <FooterHeadings text="Product" />
            <FooterMenuItems text="Client" url="/services/as-a-client" />
            <FooterMenuItems
              text="Service Providers"
              url="/services/as-a-service-provider"
            />
            <FooterMenuItems text="Contact Us" url="/contact-us" />
          </VStack>
          <VStack spacing="0" gap=".75rem" align="flex-start">
            <FooterHeadings text="Company" />
            <FooterMenuItems text="About Us" url="/about-us" />
            <FooterMenuItems text="Privacy Policy" url="/" />
            <FooterMenuItems text="Terms & Conditions" url="/" />
          </VStack>
          <VStack spacing="0" gap=".75rem" align="flex-start">
            <HStack spacing={['1.25rem', '1rem']} mb={['.5rem', '0']}>
              <FooterIcons icon={FaFacebookF} url="https://www.facebook.com/profile.php?id=61551052834124&mibextid=LQQJ4d" />
              <FooterIcons icon={FaLinkedinIn} url="https://www.linkedin.com/company/dara-connect" />
              <FooterIcons icon={AiFillInstagram} url="https://instagram.com/daraapphq?igshid=NGVhN2U2NjQ0Yg==" />
              <FooterIcons icon={FaXTwitter} url="https://twitter.com/daraAppHQ" />
            </HStack>
            <FooterMenuItems
              text="support@usedara.com"
              url="mailto@support@usedara.com"
            />
            <FooterMenuItems text="+2347086691850" url="tel:+2347086691850" />
          </VStack>
        </Grid>
      </HStack>
      <Box w={['90%', '90%']} mx="auto" p={['2rem 0 0', '4rem 0 2rem']}>
        <Divider color="white" />
        <Text
          fontWeight={500}
          color="white"
          textAlign="center"
          mt={['.5rem', '1.5rem']}
          fontSize={['.6rem', '1rem']}
        >
          Copyright © 2023 Dara. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
