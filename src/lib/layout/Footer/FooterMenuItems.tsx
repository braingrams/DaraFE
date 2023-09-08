import React from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export const FooterMenuItems = ({
  text,
  url,
}: {
  text: string;
  url: string;
}) => {
  return (
    <Link passHref href={url}>
      <Text
        fontWeight="500"
        fontSize={['.8rem', '.875rem']}
        mb="0"
        cursor="pointer"
        color="rgba(255, 255, 255, 0.90)"
      >
        {text}
      </Text>
    </Link>
  );
};
