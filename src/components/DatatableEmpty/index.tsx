import { Box, Text } from '@chakra-ui/react';

export function DatatableEmptyComponent() {
  return (
    <Box
      my={10}
      alignItems="center"
      display="flex"
      flexDirection="column">

      <Text fontSize="2xl" fontWeight="bold">No results found</Text>
      <Text color="gray.500">Try to find something else or create what you need</Text>
    </Box>
  );
}
