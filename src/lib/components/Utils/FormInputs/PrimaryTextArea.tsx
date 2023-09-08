import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { IPrimaryInput } from '../../Schemas';

export const PrimaryTextArea = ({
  label,
  placeholder,
  h,
  count,
}: IPrimaryInput) => {
  return (
    <FormControl>
      <FormLabel fontSize="1rem" fontWeight="600" color="#1F2937" mb=".56rem">
        {label}
      </FormLabel>
      <Textarea
        p="4rem"
        border="1px solid #E5E7EB"
        borderRadius=".5rem"
        boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
        fontSize="1.125rem"
        placeholder={placeholder}
        h={h}
        resize="none"
      ></Textarea>
      <Flex justify="flex-end" fontSize=".875rem" fontWeight="500" mt=".5rem">
        {count}
      </Flex>
    </FormControl>
  );
};
