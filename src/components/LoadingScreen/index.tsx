import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export function LoadingScreenComponent() {
  return (
    <Box
      height="100vh"
      minHeight="100vh"
      width="100vw"
      minWidth="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center">

      <Text
        fontSize="9xl"
        color="gray.300"
        textAlign="center"
        fontWeight="bold">
        Loading your data
      </Text>
    </Box>
  );
}
