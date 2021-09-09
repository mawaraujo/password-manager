import React from 'react';
import { IconGenerator } from '../IconGenerator/';
import { Text, Box } from '@chakra-ui/react';
import { Tag } from '../../core/types/reducers';

declare type Props = {
  handleSelectedTag: (tag: Tag) => void;
  tag: Tag;
}

export function SidebarTagsContentComponent({ handleSelectedTag, tag }: Props) {
  return (
    <Box
      onClick={() => handleSelectedTag(tag)}
      py={4}
      w="100%"
      className="app-left-item"
      display="flex"
      alignItems="center">

      <IconGenerator type={tag.icon} />
      <Text fontSize="1xl" ml="3">{tag.name}</Text>
    </Box>
  );
}
