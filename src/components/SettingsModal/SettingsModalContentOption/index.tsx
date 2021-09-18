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
      p={5}
      my="auto"
      cursor="pointer"
      fontSize="xl"
      color={ selectedTab === optionValue ? 'white' : '' }
      background={ selectedTab === optionValue ? 'teal.700' : '' }
      _hover={{
        backgroundColor: 'teal.600',
        color: 'white',
      }}
      onClick={() => setSelectedTab(optionValue)}>
      { optionName ? optionName : 'Option name' }
    </Text>
  );
}
