import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Box,
} from '@chakra-ui/react';
import { SettingsModalContentComponent } from './SettingsModalContent';

declare type Props ={
  handleSetConfigModal: Function;
}

export function SettingsModalComponent({ handleSetConfigModal }: Props) {
  const handleClose = () => {
    handleSetConfigModal(false);
  };

  // const handleSubmit = () => {
  //   handleSetConfigModal(false);
  // };

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent p={0} style={{ maxWidth: 680 }} rounded={0}>
        <ModalBody p={0}>
          <SettingsModalContentComponent />

          <Box
            display="flex"
            justifyContent="end"
            p={3}
            borderTop="1px"
            borderTopColor="gray.300">

            <Button onClick={handleClose}>Close</Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
