import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { IPrimaryInput } from '../../Schemas';
import { ValidationError } from '@formspree/react';

export const PrimaryInput = ({
  label,
  placeholder,
  error,
  name,
  type = 'text',
}: IPrimaryInput) => {
  return (
    <FormControl isInvalid={error}>
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
        type={type}
        name={name}
      />
      <ValidationError prefix={label} field={name} errors={error} />
    </FormControl>
  );
};
