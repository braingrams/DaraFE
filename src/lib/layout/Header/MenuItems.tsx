'use client';

import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { IMenuProps } from '~/lib/components/Schemas';
import { usePathname } from 'next/navigation';

export const MenuItems = ({ link }: IMenuProps) => {
  const url = `/${link.href}`;
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      _hover={{
        textDecor: 'none',
        color: 'brand.100',
      }}
    >
      <Box
        cursor="pointer"
        fontFamily="Inter"
        fontSize="1rem"
        fontWeight={500}
        color={isActive ? 'brand.100' : 'brand.200'}
      >
        {link.name}
      </Box>
    </Link>
  );
};
