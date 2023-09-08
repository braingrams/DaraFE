'use client';
import { VStack, Box, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { ContactView } from '~/lib/components/Utils/ContactView';
import { CustomBtn } from '~/lib/components/Utils/CustomBtn';
import { CustomContainer } from '~/lib/components/Utils/CustomContainer';
import { CustomList } from '~/lib/components/Utils/CustomList';
import { PrimaryInput } from '~/lib/components/Utils/FormInputs/PrimaryInput';
import { PrimaryTextArea } from '~/lib/components/Utils/FormInputs/PrimaryTextArea';
import { MainHeader } from '~/lib/components/Utils/MainHeader';
import { MainSubTitle } from '~/lib/components/Utils/MainSubTitle';
import { TextWithDot } from '~/lib/components/Utils/TextWithDot';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const ContactUs = () => {
  return (
    <Box>
      <CustomContainer>
        <VStack gap="1.5rem" py="7.5rem" borderBottom="1px solid #D1D5DB">
          <TextWithDot text="Contact Us" />
          <MainHeader
            fw={600}
            text="Connect with Us for Personalized Support"
          />
          <MainSubTitle
            w="80%"
            text="At Dara, customer satisfaction is at the heart of what we do. Whether you have questions about our services, need assistance, or simply want to share your feedback, we're here to help. Our dedicated team is ready to provide you with the support you need to have a seamless experience. Feel free to drop us a message, and we'll get back to you promptly."
          />
        </VStack>
        <HStack my="7.5rem" gap="7.5rem" w="full" p="2.5rem" align="flex-start">
          <Box w="full" bgColor="#EAF1FF" borderRadius="1.25rem">
            <VStack mt="2rem" align="flex-start" p="2rem" gap="1.5rem">
              <Image src="/assets/herod.png" alt="contact" />
              <MainHeader
                text="Reach us via these mediums"
                align="left"
                fw="600"
                size="1.125rem"
              />
              <ContactView
                icon={BsFillTelephoneFill}
                title="Telephone"
                text="+234 8101234567"
              />
              <ContactView
                icon={HiMail}
                title="Email"
                text="support@dara.com"
              />
              <ContactView icon={FaLinkedinIn} title="LinkedIn" text="Dara" />
              <ContactView icon={FaXTwitter} title="X (Twitter)" text="Dara" />
              <ContactView icon={FaFacebookF} title="Facebook" text="Dara" />
              <ContactView
                icon={AiFillInstagram}
                title="Instagram"
                text="Dara"
              />
            </VStack>
          </Box>
          <Box
            w="full"
            p="1.5rem"
            borderRadius="1.25rem"
            border="1px solid #E5E7EB"
          >
            <form>
              <VStack gap="1.75rem" align="flex-start">
                <PrimaryInput label="Name" placeholder="Enter your full name" />
                <PrimaryInput
                  label="Email"
                  placeholder="Enter your email address"
                />
                <PrimaryTextArea
                  label="Message"
                  placeholder="Type your message"
                  h="21rem"
                  count="0/1000"
                />
                <CustomBtn text="Submit" p="1.5rem 3rem" />
              </VStack>
            </form>
          </Box>
        </HStack>
      </CustomContainer>
    </Box>
  );
};
