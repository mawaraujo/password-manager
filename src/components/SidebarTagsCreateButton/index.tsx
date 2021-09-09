import React, {} from 'react';
import { Box, Text } from '@chakra-ui/react';

declare type Props = {
  title: string;
  handleClick: () => void;
}

export function SidebarTagsCreateButtonComponent({ title, handleClick }: Props) {
  return (
    <Box px={4} mt={5} color="white">
      <Text
        onClick={handleClick}
        background="whiteAlpha.200"
        _hover={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          transition: '.05s ease',
        }}
        py={3}
        textAlign="center"
        cursor="pointer"
        borderRadius="5px"
        fontWeight="bold">
        { title ? title : 'Create a new tag'}
      </Text>
    </Box>
  );
}
