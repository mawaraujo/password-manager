import React from 'react';

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Text,
} from '@chakra-ui/react';

declare type Props = {
  onClose: Function;
  onAccept: Function;
  title: string;
  description: string;
}

export function ActionModalComponent({ onClose, onAccept, title, description }: Props) {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={true}
      onClose={() => onClose()}>

      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ title ? title : 'Modal body' }</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" mb="1rem">
            { description ? description : '' }
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={() => onClose()}>
              Close
          </Button>

          <Button variant="ghost" onClick={() => onAccept()}>
            Accept
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
