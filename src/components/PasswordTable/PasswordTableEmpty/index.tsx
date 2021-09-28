import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export function PasswordTableEmptyComponent() {
  return (
    <Box
      px={3}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={10}>

      <Text fontSize="3xl" fontWeight="bold" mb={2}>
        Empty Passwords
      </Text>

      <Text fontSize="xl" textColor="gray.400">
        Create a first password to start
      </Text>
    </Box>
  );
}
