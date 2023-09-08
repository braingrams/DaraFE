'use client';
import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import { MenuItems } from './MenuItems';
import { MenuWithDropdown } from './MenuWithDropDown';
import { CustomBtn } from '~/lib/components/Utils/CustomBtn';
import { CustomContainer } from '~/lib/components/Utils/CustomContainer';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  return (
    <Flex as="header" width="full" align="center" boxShadow="md">
      <CustomContainer>
        <Flex
          w="100%"
          mx="auto"
          h="5rem"
          align="center"
          justify="space-between"
        >
          <Box onClick={() => router.push('/')}>
            <Image src="/assets/logo.png" alt="logo image" />
          </Box>
          <HStack gap="2rem">
            <MenuItems link={{ href: '', name: 'Home' }} />
            <MenuWithDropdown
              menus={[
                { name: 'as-a-client' },
                { name: 'as-a-service-provider' },
              ]}
              menuTitle="services"
            />
            <MenuItems link={{ href: 'categories', name: 'Categories' }} />
            <MenuItems link={{ href: 'about-us', name: 'About us' }} />
            <CustomBtn
              text="Contact Us"
              p="1rem 2rem"
              onClick={() => router.push('/contact-us')}
            />
          </HStack>
        </Flex>
      </CustomContainer>
    </Flex>
  );
};

export default Header;
