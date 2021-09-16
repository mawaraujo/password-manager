import React, { Dispatch, SetStateAction, useState } from 'react';
import { TagState, PasswordState, Password } from '../../core/types/reducers';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button, Text, Menu, MenuButton, Box, MenuList, MenuItem } from '@chakra-ui/react';
import useClipboard from '../../hooks/useClipboard';
import { IconGenerator } from '../IconGenerator';
import { useDispatch } from 'react-redux';
import { deletePassword } from '../../core/store/actions/passwords';
import { createNotification } from '../../core/store/actions/notifications';
import { ConfirmActionModalComponent } from '../ConfirmActionModal';

declare type Props = {
  TAG_STATE: TagState;
  PASSWORD_STATE: PasswordState;
  setSelectedPassword: (state: Password) => void;
  setShowModal: (state: boolean) => void;
}

declare type RenderTableItemsProps = {
  password: Password;
  handleClipboard: (val: string | undefined) => void;
  handleEdit: (password: Password) => void;
  handleDelete: (password: Password) => void;
}

declare type IpasswordToDelete = [
  passwordToDelete: any,
  setPasswordToDelete: Dispatch<SetStateAction<Password | any>>
]

function RenderTableItems({ password, handleClipboard, handleEdit, handleDelete }: RenderTableItemsProps) {
  return (
    <Tr key={password.token}>
      <Td>{password.name}</Td>

      <Td>
        <Text display="inline-block">{password.username}</Text>
        <Button
          onClick={() => handleClipboard(password.username)}
          display="inline-block"
          ml={3}
          _focus={{ borderColor: 'teal.700' }}
          h="1.75rem"
          size="xs">
          <IconGenerator type="clipboard" sizeClass="app-icon-table-size"/>
        </Button>
      </Td>

      <Td>
        <Text display="inline-block">{password.email}</Text>
        <Button
          onClick={() => handleClipboard(password.email)}
          display="inline-block"
          ml={3}
          _focus={{ borderColor: 'teal.700' }}
          h="1.75rem"
          size="xs">
          <IconGenerator type="clipboard" sizeClass="app-icon-table-size"/>
        </Button>
      </Td>

      <Td>
        <Text display="inline-block">*********</Text>
        <Button
          onClick={() => handleClipboard(password.password)}
          display="inline-block"
          ml={3}
          _focus={{ borderColor: 'teal.700' }}
          h="1.75rem"
          size="xs">
          <IconGenerator type="clipboard" sizeClass="app-icon-table-size"/>
        </Button>
      </Td>

      <Td>
        <Menu>
          <MenuButton>
            <Box className="app-right-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="app-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </Box>
          </MenuButton>

          <MenuList color="black">
            <MenuItem fontWeight="bold" onClick={() => handleEdit(password)}>Edit</MenuItem>
            <MenuItem fontWeight="bold" onClick={() => handleDelete(password)}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Td>
    </Tr>
  );
}

export function PasswordTableComponent({ TAG_STATE, PASSWORD_STATE, setSelectedPassword, setShowModal }: Props) {
  const dispatch = useDispatch();
  const { handleClipboard } = useClipboard();

  const [passwordToDelete, setPasswordToDelete]: IpasswordToDelete = useState(null);
  const [showActionModal, setActionModal] = useState(false);

  const handleEdit = (password: Password) => {
    setSelectedPassword(password);
    setShowModal(true);
  };

  const onDelete = () => {
    dispatch(deletePassword(passwordToDelete));

    dispatch(createNotification({
      message: `Entry deleted successfully!`,
      type: 'success',
    }));
  };

  const handleDelete = (password: Password) => {
    setPasswordToDelete(password);
    setActionModal(true);
  };

  const handleCancelDelete = () => {
    setPasswordToDelete(null);
    setActionModal(false);
  };

  return (
    <>
      <Table>
        <TableCaption>List of credentials</TableCaption>
        <Thead>
          <Tr>
            <Th>Entry</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            (TAG_STATE.selectedTag.id !== 0) ?
              PASSWORD_STATE.passwords.map((password) => {
                if (password.tagId === TAG_STATE.selectedTag.id) {
                  return <RenderTableItems
                    key={password.token}
                    password={password}
                    handleClipboard={handleClipboard}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit} />;
                }
              }) :
              PASSWORD_STATE.passwords.map((password) => (
                <RenderTableItems
                  key={password.token}
                  password={password}
                  handleClipboard={handleClipboard}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit} />
              ))
          }
        </Tbody>
      </Table>

      { showActionModal &&
        <ConfirmActionModalComponent
          handleCancel={handleCancelDelete}
          handleOK={onDelete}
          title="Delete password"
          description="¿Do you want to delete this password? Think twice, it will be deleted forever ☢️." />
      }
    </>
  );
}
