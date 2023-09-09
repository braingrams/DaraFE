'use client';
import { Box, Flex, HStack, Icon, Image } from '@chakra-ui/react';
import { MenuItems } from './MenuItems';
import { MenuWithDropdown } from './MenuWithDropDown';
import { CustomBtn } from '~/lib/components/Utils/CustomBtn';
import { CustomContainer } from '~/lib/components/Utils/CustomContainer';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  function closeNav() {
    setOpenNav((prev) => !prev);
  }
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      boxShadow="md"
      pos="sticky"
      top="0"
      zIndex="900"
      bgColor="white"
    >
      <CustomContainer>
        <Flex
          w="100%"
          mx="auto"
          h="5rem"
          align="center"
          justify="space-between"
          pos="relative"
        >
          <Box onClick={() => router.push('/')} ml="-.5rem">
            <Image
              src="/assets/logo.png"
              alt="logo image"
              h={['2rem', '3rem']}
            />
          </Box>
          <HStack
            gap="2rem"
            pos={['fixed', 'unset']}
            top="5.5rem"
            flexDirection={['column', 'row']}
            bgColor="white"
            h={['100vh', '100%']}
            w={['full', 'auto']}
            alignItems={['flex-start', 'center']}
            left={openNav ? '0%' : '-100%'}
            p={['1.5rem', '0']}
            transition=".5s ease"
          >
            <MenuItems onClick={closeNav} link={{ href: '', name: 'Home' }} />
            <MenuWithDropdown
              menus={[
                { name: 'as-a-client' },
                { name: 'as-a-service-provider' },
              ]}
              onClick={closeNav}
              menuTitle="services"
            />
            <MenuItems
              onClick={closeNav}
              link={{ href: 'categories', name: 'Categories' }}
            />
            <MenuItems
              onClick={closeNav}
              link={{ href: 'about-us', name: 'About us' }}
            />
            <CustomBtn
              text="Contact Us"
              p="1rem 2rem"
              onClick={() => {
                router.push('/contact-us');
                closeNav();
              }}
              w={['full', 'auto']}
            />
          </HStack>
          <Icon
            display={['block', 'none']}
            as={openNav ? AiOutlineClose : BiMenu}
            onClick={closeNav}
            fontSize="1.5rem"
          />
        </Flex>
      </CustomContainer>
    </Flex>
  );
};

export default Header;
