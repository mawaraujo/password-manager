import React, { useState, useEffect } from 'react';
import { SidebarTagsGroupComponent } from '../SidebarTagsGroup';
import { Box, Text } from '@chakra-ui/react';
import { SidebarTagsCreateButtonComponent } from '../SidebarTagsCreateButton';
import { SidebarTagsCreationModal } from '../SidebarTagsCreationModal';

declare type Props = {
  className: string;
}

export function SidebarComponent({ className }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [tagEditSelected, setTagEditSelected] = useState(null);

  const handleTagEditSelected = (tag: any) => setTagEditSelected(tag); // FIX TYPES
  const handleSetModal = () => setShowModal(true);

  useEffect(() => {
    if (tagEditSelected) setShowModal(true);
  }, [tagEditSelected]);

  useEffect(() => {
    if (!showModal) setTagEditSelected(null);
  }, [showModal]);

  return (
    <Box
      className={className}
      bgColor="teal.700">

      <Box px={4} className="head-text">
        <Text color="white" fontSize="5xl" fontWeight="bold">Locky</Text>

        <Text
          color="whiteAlpha.700"
          fontSize="1xl">
          Password manager
        </Text>
      </Box>

      <hr className="app-divider"/>

      <SidebarTagsGroupComponent
        handleTagEditSelected={handleTagEditSelected}/>

      <SidebarTagsCreateButtonComponent
        handleClick={handleSetModal}
        title="Create a new tag" />

      <SidebarTagsCreationModal
        showModal={showModal}
        setShowModal={setShowModal}
        tagEditSelected={tagEditSelected} />
    </Box>
  );
}
