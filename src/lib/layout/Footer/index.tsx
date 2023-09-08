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
    <Box w="100%" py="3.5rem" bgColor="brand.100" mt="9.5rem">
      <HStack align="flex-start" w="80%" mx="auto" justify="space-between">
        <VStack align="flex-start" w="40%">
          <Box>
            <Image src="/assets/logob.png" alt="logo image" />
          </Box>
          <Text
            fontSize="1rem"
            lineHeight="1.5rem"
            color="white"
            w="80%"
            pl="1rem"
          >
            Dara is a social gig platform, connecting verified and trusted
            artisans and professional service providers with clients.
          </Text>
        </VStack>

        <Grid
          templateColumns={['1fr', 'repeat(3, 1fr)']}
          gap="2rem"
          w="60%"
          justifyContent="flex-end"
          mt="1rem"
        >
          <VStack spacing="0" gap="0.75rem" align="flex-start">
            <FooterHeadings text="Product" />
            <FooterMenuItems text="Client" url="/" />
            <FooterMenuItems text="Service Providers" url="/" />
            <FooterMenuItems text="Contact Us" url="/" />
          </VStack>
          <VStack spacing="0" gap=".75rem" align="flex-start">
            <FooterHeadings text="Company" />
            <FooterMenuItems text="About Us" url="/" />
            <FooterMenuItems text="Privacy Policy" url="/" />
            <FooterMenuItems text="Terms & Conditions" url="/" />
          </VStack>
          <VStack spacing="0" gap=".75rem" align="flex-start">
            <HStack spacing="1rem">
              <FooterIcons icon={FaFacebookF} url="/" />
              <FooterIcons icon={FaLinkedinIn} url="/" />
              <FooterIcons icon={AiFillInstagram} url="/" />
              <FooterIcons icon={FaXTwitter} url="/" />
            </HStack>
            <FooterMenuItems text="support@dara.com" url="/" />
            <FooterMenuItems text="+2348101234567" url="/" />
          </VStack>
        </Grid>
      </HStack>
      <Box w="80%" mx="auto" p="4rem 0 2rem">
        <Divider color="white" />
        <Text fontWeight={500} color="white" textAlign="center" mt="1.5rem">
          Copyright © 2023 Dara. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
