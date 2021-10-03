import React, { useState, useEffect, SetStateAction } from 'react';
import { SidebarTagsGroupComponent } from './SidebarTagsGroup';
import { Box, Button, Text } from '@chakra-ui/react';
import { SidebarButton } from './SidebarButton';
import { SidebarTagsCreationModalComponent } from './SidebarTagsCreationModal';
import { SettingsModalComponent } from '../SettingsModal/SettingsModal';
import { appVersion } from '../../core/types/commons';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../core/store/actions/sidebar';

declare type Props = {
  className: string;
}

export function SidebarComponent({ className }: Props) {
  const dispatch = useDispatch();

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

      <Box width="100%" minWidth="100%" pr={3} pt={3}>
        <Button
          className="responsive-sidebar-close-button"
          variant="outline"
          colorScheme="whiteAlpha"
          size="sm"
          ml="auto"
          onClick={() => dispatch(toggleSidebar())}>
          <Text fontWeight="bold" color="white">Close menu</Text>
        </Button>
      </Box>

      <Box px={4} className="head-text">
        <Text color="white" fontSize="5xl" fontWeight="bold">Locky</Text>
        <Text color="whiteAlpha.700" fontSize="1xl">Save your credentials</Text>
        <Text color="whiteAlpha.600" fontSize="xs" >Version: {appVersion}</Text>
      </Box>

      <hr className="app-divider"/>

      <Box display="flex" justifyContent="space-between" flexDirection="column">
        <Box className="top">
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
      </Box>
    </Box>
  );
}
