import { Icon } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const FooterIcons = ({ icon, url }: { icon: any; url: string }) => {
  return (
    <Link passHref href={url}>
      <Icon
        fontSize={['1.5rem', '1rem']}
        cursor="pointer"
        color="white"
        as={icon}
      />
    </Link>
  );
};
