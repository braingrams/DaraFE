import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  Circle,
} from '@chakra-ui/react';
import React from 'react';
import { TfiAngleDown, TfiAngleRight, TfiAngleUp } from 'react-icons/tfi';
import { IAccordion } from '../Schemas';

export const CustomAccordion = ({ title, content }: IAccordion) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <Box
          borderY={isExpanded ? '1px solid' : '1px solid'}
          borderColor="#E5E7EB"
          py="1rem"
          //   borderRadius="1.125rem"
          //   boxShadow="md"
          bgColor="white"
        >
          <h2>
            <AccordionButton
              //   h="3.37rem"
              px="1.25rem"
              display="flex"
              justifyContent="space-between"
              _hover={{
                bgColor: 'transparent',
              }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={['1rem', '1.25rem']}
                lineHeight="1.75rem"
                color="#073367"
                noOfLines={1}
                fontWeight="500"
                maxW="65%"
              >
                {title}
              </Box>
              {isExpanded ? (
                <TfiAngleUp fontSize=".8rem" color="brand.400" />
              ) : (
                <TfiAngleDown fontSize=".8rem" color="bramd.400" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={6}
            textAlign="left"
            fontSize={['1rem', '1.125rem']}
            lineHeight="1.875rem"
            color="#6f6c90"
            w="95%"
            px="1.25rem"
          >
            {content}
          </AccordionPanel>
        </Box>
      )}
    </AccordionItem>
  );
};
