'use client';

import { Box } from '@chakra-ui/react';
import React from 'react';
import { IMenuProps } from '~/lib/components/Schemas';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const MenuItems = ({ link }: IMenuProps) => {
  const url = `/${link.href}`;
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link href={url} passHref>
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
