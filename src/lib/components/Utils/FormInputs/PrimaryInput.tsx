import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { IPrimaryInput } from '../../Schemas';

export const PrimaryInput = ({
  label,
  placeholder,
  onChange,
  value,
  type = 'text',
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
      <Input
        h={['3rem', '4rem']}
        border="1px solid #E5E7EB"
        borderRadius=".5rem"
        boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
        fontSize={['.875rem', '1.125rem']}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
      {/* <FormErrorMessage fontSize=".7rem" color="red">
        {!value && `${label} is required`}
      </FormErrorMessage> */}
    </FormControl>
  );
};
