import React from 'react';
import { Text } from '@chakra-ui/react';

declare type Props = {
  selectedTab: String;
  setSelectedTab: Function;
  optionName: String;
  optionValue: String;
}

export function SettingsModalContentOptionComponent({ selectedTab, setSelectedTab, optionName, optionValue }: Props) {
  return (
    <Text
      p={3}
      my="auto"
      cursor="pointer"
      fontSize="lg"
      marginRight={2}
      borderRadius="md"
      color={ selectedTab === optionValue ? 'gray.800' : '' }
      background={ selectedTab === optionValue ? 'gray.200' : '' }
      _hover={{
        backgroundColor: 'gray.100',
        color: 'gray.600',
      }}
      onClick={() => setSelectedTab(optionValue)}>
      { optionName ? optionName : 'Option name' }
    </Text>
  );
}
