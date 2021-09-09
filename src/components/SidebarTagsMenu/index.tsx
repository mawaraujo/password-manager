import React from 'react';
import { Box } from '@chakra-ui/react';
import { Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/menu';
import { Tag } from '../../core/types/reducers';

declare type Props = {
  handleDeleteTag: (item: Tag) => void;
  handleTagEditSelected: (item: Tag) => void;
  tag: Tag;
}

export function SidebarTagsMenuComponent({ handleDeleteTag, tag, handleTagEditSelected }: Props) {
  return (
    <Menu>
      <MenuButton>
        <Box className="app-right-item">
          <svg xmlns="http://www.w3.org/2000/svg" className="app-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </Box>
      </MenuButton>

      <MenuList color="black">
        <MenuItem fontWeight="bold" onClick={() => handleTagEditSelected(tag)}>Edit</MenuItem>

        <MenuItem fontWeight="bold" onClick={() => handleDeleteTag(tag)}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
