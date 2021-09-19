import React, { Dispatch, SetStateAction, useState } from 'react';
import { TagState, PasswordState, Password } from '../../core/types/reducers';
import { Text, Menu, MenuButton, Box, MenuList, MenuItem } from '@chakra-ui/react';
import useClipboard from '../../hooks/useClipboard';
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
    <Box
      p={5} mb={3}
      display="flex"
      justifyContent="space-between"
      boxShadow="lg"
      width="100%"
      rounded="xl">

      <Box display="flex" flexDirection="column">
        <Box fontWeight="bold" color="gray.900" fontSize="xl" mb={1}>{password.name}</Box>

        <Box marginRight={2} color="gray.500" display="flex" rounded="md">
          <Text display="inline-block" fontWeight="bold">{password.email}</Text>
        </Box>
      </Box>

      <Menu>
        <MenuButton>
          <Box rounded="2xl" p={1} className="app-right-item" background="gray.100">
            <svg xmlns="http://www.w3.org/2000/svg" className="app-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </Box>
        </MenuButton>

        <MenuList color="black">
          <MenuItem fontWeight="bold" onClick={() => handleEdit(password)}>Edit</MenuItem>
          <MenuItem fontWeight="bold" color="red.500" onClick={() => handleDelete(password)}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Box>
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
      <Box display="flex" className="md-column" gridGap={3} p={3}>
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
      </Box>

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
