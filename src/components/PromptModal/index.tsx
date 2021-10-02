import React from 'react';

import {
  Button,
  FormControl,
  Input,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export declare type Props = {
  onAccept: (password: String) => void;
  onCloseModal: () => void;
  setValue: Function;
  value: String;
  title?: String;
  description?: String;
  isClosable?: Boolean;
  inputType?: string;
  inputWrong?: Boolean;
  inputWrongText?: String;
}

export function PrompModalComponent({
  onAccept,
  onCloseModal,
  value,
  setValue,
  title,
  description,
  isClosable = true,
  inputType = 'password',
  inputWrong = false,
  inputWrongText,
}: Props) {
  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') return onAccept(value);
  };

  return (
    <Modal
      isOpen={true}
      onClose={onCloseModal}>
      <ModalOverlay />

      <ModalContent>

        <ModalHeader></ModalHeader>
        { isClosable && <ModalCloseButton /> }

        <ModalBody pb={6} onKeyDown={(e) => handleEnter(e)}>
          <Text fontSize="2xl" fontWeight="bold">
            { title ? title : 'Enter your secure password'}
          </Text>

          {
            description &&
            <Text textColor="gray.500">{ description }</Text>
          }

          <FormControl mt={3}>
            <Input
              style={ inputWrong ? {
                borderWidth: 2,
                borderColor: 'red',
              } : {}}
              type={inputType}
              focusBorderColor={inputWrong ? 'none' : 'teal.700'}
              onChange={(e) => setValue(e.target.value)}
              placeholder="abcde12345" />
          </FormControl>

          {
            (inputWrong && inputWrongText) &&
            <Text color="red.600">{inputWrongText}</Text>
          }
        </ModalBody>

        <ModalFooter>
          <Button
            disabled={(value.length < 1) ? true : false}
            onClick={() => onAccept(value)}
            color="white"
            background="teal.700"
            mr={3}>
            Continue
          </Button>

          { isClosable && <Button onClick={onCloseModal}>Cancel</Button>}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
