import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { useSearchFilter } from '../../hooks/useSearchFilter';
import { DatatableEmptyComponent } from '../DatatableEmpty';
import type { AppState, Password } from '../../core/types/reducers';
import { DatatableItemComponent } from '../DatatableItem';
import { deletePassword } from '../../core/store/actions/passwords';
import { createNotification } from '../../core/store/actions/notifications';
import { ConfirmActionModalComponent } from '../ConfirmActionModal';
import { useState } from 'react';

declare type Props = {
  setSelectedPassword: Function;
  setShowModal: Function;
}

export function DatatableComponent({ setSelectedPassword, setShowModal }: Props) {
  const dispatch = useDispatch();

  const { passwords } = useSelector((state: AppState) => state.passwords);
  const { search } = useSelector((state: AppState) => state.search);
  const { data, isEmpty } = useSearchFilter(search, passwords);

  const [passwordToDelete, setPasswordToDelete] = useState(null);
  const [showActionModal, setActionModal] = useState(false);

  const onDelete = () => {
    if (passwordToDelete) {
      dispatch(deletePassword(passwordToDelete));
      dispatch(createNotification({message: `Entry deleted successfully!`, type: 'success'}));
    }

    setActionModal(false);
  };

  const handleEdit = (password: Password) => {
    setSelectedPassword(password);
    setShowModal(true);
  };

  const handleDelete = (password: any) => {
    setPasswordToDelete(password);
    setActionModal(true);
  };

  const handleCancelDelete = () => {
    setPasswordToDelete(null);
    setActionModal(false);
  };

  if (isEmpty) {
    return (<DatatableEmptyComponent />);
  }

  return (
    <Box
      mx={5}
      mt={3}
      display="flex"
      flexDirection="column">

      { showActionModal &&
        <ConfirmActionModalComponent
          handleCancel={handleCancelDelete}
          handleOK={onDelete}
          title="Delete password"
          description="¿Do you want to delete this password?" />
      }

      { data.map((credential: Password) => (
        <DatatableItemComponent
          onDelete={handleDelete}
          onEdit={handleEdit}
          key={credential.token}
          item={credential} />
      )) }
    </Box>
  );
}
