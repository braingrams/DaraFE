import {
  Flex,
  FormControl,
  FormErrorMessage,
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
  onChange,
  value,
}: IPrimaryInput) => {
  return (
    <FormControl
    // isInvalid={!value}
    >
      <FormLabel
        fontSize={['.75rem', '1rem']}
        fontWeight="600"
        color="#1F2937"
        mb=".56rem"
      >
        {label}
      </FormLabel>
      <Textarea
        border="1px solid #E5E7EB"
        borderRadius=".5rem"
        boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
        fontSize={['.87rem', '1.125rem']}
        placeholder={placeholder}
        h={h}
        resize="none"
        onChange={onChange}
      ></Textarea>
      <Flex
        justify="flex-end"
        fontSize={['.75rem', '.875rem']}
        fontWeight="500"
        mt=".5rem"
        color="#9CA3AF"
      >
        {count}
      </Flex>
      {/* <FormErrorMessage fontSize=".7rem" color="red">
        {!value && `${label} is required`}
      </FormErrorMessage> */}
    </FormControl>
  );
};
