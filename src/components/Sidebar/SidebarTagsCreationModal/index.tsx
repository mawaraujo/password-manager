import React, { useEffect } from 'react';
import { Tag } from '../../../core/types/reducers';
import { iconsList } from '../../../core/types/commons';
import { IconGenerator } from '../../IconGenerator';
import useTagCreationModal from '../../../hooks/useTagCreationModal';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Box,
} from '@chakra-ui/react';

declare type Props = {
  tagEditSelected: Tag | null;
  setShowModal: (state: boolean) => void;
}

export function SidebarTagsCreationModalComponent({ tagEditSelected, setShowModal }: Props) {
  const {
    setTagIcon,
    setTagName,
    tagIcon,
    tagName,
    handleCreate,
    handleEdit,
  } = useTagCreationModal(setShowModal);

  const onClose = () => setShowModal(false);

  useEffect(() => {
    setTagName(tagEditSelected?.name || '');
    setTagIcon(tagEditSelected?.icon || '');
  }, [tagEditSelected]);

  const handleSubmit = () => {
    if (tagEditSelected) return handleEdit(tagEditSelected?.id);
    handleCreate(Math.random().toString(36).substr(2, 5));
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          { tagEditSelected ? 'Tag editing' : 'Create a new tag' }
        </ModalHeader>
        <ModalCloseButton color="teal.700" />

        <ModalBody>
          <FormControl mb="5" id="name">
            <FormLabel fontWeight="bold" color="gray.500">Tag name</FormLabel>

            <Input
              focusBorderColor="teal.700"
              placeholder="Social, Job, etc..."
              type="text"
              onChange={(e) => setTagName(e.target.value)}
              value={tagName} />
          </FormControl>

          <FormLabel fontWeight="bold" color="gray.500">Tag icon</FormLabel>
          <Grid my={3} templateColumns="repeat(5, 1fr)" gap={6}>
            {
              iconsList.map((icon) => (
                <Box
                  onClick={() => setTagIcon(icon)}
                  cursor="pointer"
                  border="2px"
                  borderRadius="md"
                  borderColor="teal.100"
                  style={{ borderColor: (icon === tagIcon) ? '#285E61' : '' }}
                  _hover={{ borderColor: 'teal.200' }}
                  mx="auto"
                  p={3}
                  key={icon}>
                  <IconGenerator type={icon} />
                </Box>
              ))
            }
          </Grid>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="ghost"
            color="teal.700"
            mr={3}
            onClick={onClose}>
            Close
          </Button>

          <Button
            isDisabled={(tagName !== '' && tagIcon !== '') ? false : true}
            onClick={handleSubmit}
            variant="solid"
            bgColor="teal.700"
            color="white">
            Save changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
