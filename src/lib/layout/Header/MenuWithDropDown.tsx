'use client';

import React from 'react';
import {
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
} from '@chakra-ui/react';
import { RxCaretDown } from 'react-icons/rx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IMenuProps {
  menus: any;
  menuIcon?: any;
  menuTitle?: any;
  onClick?: any;
}

export const MenuWithDropdown = ({
  menus,
  menuTitle,
  menuIcon = <RxCaretDown />,
  onClick,
}: IMenuProps) => {
  const url = `/${menuTitle}`;
  const pathname = usePathname();
  const isActive = pathname.startsWith(url);
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={menuIcon}
        bgColor="transparent"
        color={isActive ? 'brand.100' : 'brand.200'}
        _hover={{
          bgColor: 'transparent',
        }}
        _active={{
          bgColor: 'transparent',
        }}
        p="0"
      >
        <Text
          color={isActive ? 'brand.100' : 'brand.200'}
          fontWeight="500"
          fontSize="1rem"
          fontFamily="Inter"
          noOfLines={1}
          mb="0"
          textTransform="capitalize"
        >
          {menuTitle.replaceAll('-', ' ')}
        </Text>
      </MenuButton>
      <MenuList borderRadius="8px" p="0" cursor="pointer" bgColor="white">
        {menus.map((x: any, i: any) => (
          <MenuItem
            borderBottom="1px solid"
            borderColor="gray.300"
            as="div"
            display="flex"
            gap=".5rem"
            py=".6rem"
            color={
              pathname.startsWith(`${url}/${x.name}`) ? 'brand.400' : 'black'
            }
            onClick={onClick}
            key={i}
          >
            {x.icon && <Icon as={x.icon} />}
            <Link href={`${url}/${x.name}`} passHref>
              <Text
                fontWeight="500"
                fontSize=".9rem"
                fontFamily="Inter"
                noOfLines={1}
                mb="0"
                textTransform="capitalize"
              >
                {x?.name?.replaceAll('-', ' ')}
              </Text>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
