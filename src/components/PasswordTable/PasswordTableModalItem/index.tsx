import { Box, Text, Button } from '@chakra-ui/react';
import { IconGenerator } from '../../IconGenerator';
import React from 'react';

declare type Props = {
  fieldType?: String;
  fieldValue?: String;
  handleClipboard: Function;
  showClipboardButton?: Boolean;
}

export default function PasswordTableModalItemComponent({ fieldType, fieldValue, handleClipboard, showClipboardButton = true }: Props) {
  return (
    <Box display="flex" justifyContent="space-between" background="gray.100" p={2} mb={3} rounded="xl">
      <Box my="auto" display="flex" fontWeight="bold">
        {
          fieldType !== 'Description' &&
          <Text background="gray.300" px={3} py={1} rounded="lg">{fieldType ? fieldType : 'Lorem'}</Text>
        }
        {
          fieldType !== 'Password' &&
          <Text ml={3} my="auto" color="gray.600">
            {fieldValue && fieldValue.length ? fieldValue : 'Empty'}
          </Text>
        }

        {
          fieldType === 'Password' &&
          <Text ml={3} my="auto" color="gray.600">*******</Text>
        }
      </Box>

      {
        showClipboardButton &&
        <Button onClick={() => handleClipboard(fieldValue)} my="auto">
          <IconGenerator type="clipboard" />
        </Button>
      }
    </Box>
  );
}
