import React, { useEffect, useState } from 'react';
import { Password, TagState } from '../../core/types/reducers';
import usePasswordCreationModal from '../../hooks/usePasswordCreationModal';

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
  Textarea,
  InputGroup,
  InputRightElement,
  Select,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { createNotification } from '../../core/store/actions/notifications';

declare type Props = {
  showModal: boolean;
  passwordSelected: Password | null | undefined;
  setSelectedPassword: (state: any) => void;
  setShowModal: (state: boolean) => void;
  tagState: TagState;
}

export function PasswordCreationModalComponent({ showModal, passwordSelected, setShowModal, setSelectedPassword, tagState }: Props) {
  const {
    name,
    setName,
    description,
    setDescription,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    url,
    setUrl,
    tagId,
    setTagId,
    handleCreate,
    handleEdit,
  } = usePasswordCreationModal(setShowModal);

  const onClose = () => {
    setShowModal(false);
    if (passwordSelected) setSelectedPassword(null);
  };

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setName(passwordSelected?.name || '');
    setDescription(passwordSelected?.description || '');
    setUsername(passwordSelected?.username || '');
    setEmail(passwordSelected?.email || '');
    setPassword(passwordSelected?.password || '');
    setUrl(passwordSelected?.url || '');
    setTagId(passwordSelected?.tagId || 0);
  }, [passwordSelected]);

  const handleSubmit = (): void => {
    if (passwordSelected) handleEdit(passwordSelected?.token);
    else handleCreate(Math.random().toString(36).substr(2, 5));

    dispatch(createNotification({
      type: 'success',
      message: passwordSelected ? 'Entry edited successfully' : 'Entry created successfully',
    }));

    setSelectedPassword(null);
  };


  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && (name !== '' && password !== '')) return handleSubmit();
  };

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Modal isOpen={showModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth={800} w="100%">
        <ModalHeader>
          { passwordSelected ? 'Entry editing' : 'Create a new entry' }
        </ModalHeader>
        <ModalCloseButton color="teal.700" />

        <ModalBody onKeyDown={(e) => handleEnter(e)}>
          <Box
            display="flex"
            flexDirection={`${!isLargerThan800 ? 'column' : 'row'}`}>

            <FormControl mb="5" id="name" mr={`${!isLargerThan800 ? '' : '4'}`}>
              <FormLabel fontWeight="bold" color="gray.500">Entry name</FormLabel>

              <Input
                focusBorderColor="teal.700"
                placeholder="Twitter password"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name} />
            </FormControl>

            <FormControl mb="5" id="name">
              <FormLabel fontWeight="bold" color="gray.500">Username</FormLabel>

              <Input
                focusBorderColor="teal.700"
                placeholder="Username"
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username} />
            </FormControl>
          </Box>

          <Box
            display="flex"
            flexDirection={`${!isLargerThan800 ? 'column' : 'row'}`}>

            <FormControl mb="5" id="name" mr={`${!isLargerThan800 ? '' : '4'}`}>
              <FormLabel fontWeight="bold" color="gray.500">E-mail</FormLabel>

              <Input
                focusBorderColor="teal.700"
                placeholder="email@domain.com"
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </FormControl>

            <FormControl mb="5" id="name">
              <FormLabel fontWeight="bold" color="gray.500">Password</FormLabel>

              <InputGroup size="md">
                <Input
                  focusBorderColor="teal.700"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    _focus={{ borderColor: 'teal.700' }}
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword((password: boolean) => !password)}>
                    {showPassword ? 'Hide' : 'Show '}
                  </Button>
                </InputRightElement>
              </InputGroup>

            </FormControl>
          </Box>

          <Box
            display="flex"
            flexDirection={`${!isLargerThan800 ? 'column' : 'row'}`}>

            <FormControl mb="5" id="name" mr={`${!isLargerThan800 ? '' : '4'}`}>
              <FormLabel fontWeight="bold" color="gray.500">Tag</FormLabel>

              <Select
                id="tagId"
                value={tagId}
                onChange={(e) => setTagId(e.target.value)}
                placeholder="Select tag">

                {
                  tagState.tags && tagState.tags.map((tag) => (
                    <option key={tag.name} value={tag.id}>{tag.name}</option>
                  ))
                }
              </Select>
            </FormControl>

            <FormControl mb="5" id="name">
              <FormLabel fontWeight="bold" color="gray.500">URL</FormLabel>

              <Input
                focusBorderColor="teal.700"
                placeholder="https://twitter.com/"
                type="text"
                id="url"
                onChange={(e) => setUrl(e.target.value)}
                value={url} />
            </FormControl>
          </Box>

          <FormControl mb="5" id="name">
            <FormLabel fontWeight="bold" color="gray.500">Description</FormLabel>

            <Textarea
              focusBorderColor="teal.700"
              placeholder="Entry description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description} />
          </FormControl>
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
            isDisabled={(name !== '' && password !== '') ? false : true}
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
