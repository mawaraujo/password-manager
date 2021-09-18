import React, { useState, useEffect, SetStateAction } from 'react';
import { SidebarTagsGroupComponent } from './SidebarTagsGroup';
import { Box, Text } from '@chakra-ui/react';
import { SidebarButton } from './SidebarButton';
import { SidebarTagsCreationModalComponent } from './SidebarTagsCreationModal';
import { SettingsModalComponent } from '../SettingsModal/SettingsModal';

declare type Props = {
  className: string;
}

export function SidebarComponent({ className }: Props) {
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tagEditSelected, setTagEditSelected] = useState(null);

  const handleTagEditSelected = (tag: any) => setTagEditSelected(tag);
  const handleSetModal = () => setShowModal(true);

  const handleSetConfigModal = (value: SetStateAction<boolean> = false) => setShowConfigModal(value);

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
        <Text color="whiteAlpha.700" fontSize="1xl">Password manager</Text>
      </Box>

      <hr className="app-divider"/>

      <SidebarTagsGroupComponent
        handleTagEditSelected={handleTagEditSelected}/>

      <SidebarButton
        handleClick={handleSetModal}
        title="Create a new tag" />

      <SidebarButton
        handleClick={handleSetConfigModal}
        title="Configuration" />

      { showModal && <SidebarTagsCreationModalComponent
        setShowModal={setShowModal}
        tagEditSelected={tagEditSelected} />
      }

      { showConfigModal && <SettingsModalComponent
        handleSetConfigModal={handleSetConfigModal} />
      }
    </Box>
  );
}
