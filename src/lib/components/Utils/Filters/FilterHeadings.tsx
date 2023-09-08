import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { TfiAngleUp } from 'react-icons/tfi';
import { MainHeader } from '../MainHeader';
import { IFilterHeads } from '../../Schemas';

export const FilterHeadings = ({ title, onClick }: IFilterHeads) => {
  return (
    <HStack justify="space-between" onClick={onClick} mb="1rem" w="full">
      <MainHeader text={title} size="1.5rem" align="left" />
      <Icon as={TfiAngleUp} fontSize="1.5rem" />
    </HStack>
  );
};
