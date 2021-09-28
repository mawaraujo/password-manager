import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { createNotification } from '../../../core/store/actions/notifications';
import { ConfirmActionModalComponent } from '../../ConfirmActionModal';

export function SettingsModalSystemComponent() {
  const dispatch = useDispatch();
  const [showResetModal, setShowResetModal] = useState(false);

  const handleResetApp = () => {
    let counter = 6;
    window.localStorage.removeItem('persist:root');

    dispatch(createNotification({ type: 'success', message: 'Application restored successfully' }));

    setInterval(() => {
      if (counter <= 1) return location.reload();

      counter--;
      return dispatch(createNotification({ type: 'warning', message: `Reloading app in ${counter}` }));
    }, 1000);
  };

  return (
    <Box>
      <Box background="gray.100" borderRadius="lg" p={4}>
        <Text fontWeight="bold" fontSize="xl">
          Restore application defaults
        </Text>

        <Text mb={4}>
          This action will remove your passwords completely
        </Text>

        <Button
          colorScheme="red"
          onClick={() => setShowResetModal(true)}>
          Restore the application
        </Button>

        {
          showResetModal &&
          <ConfirmActionModalComponent
            handleOK={handleResetApp}
            handleCancel={() => setShowResetModal(false)}
            title="Restore the application"
            colorScheme="red"
            description="Do you want to continue? This action will be irreversible" />
        }
      </Box>
    </Box>
  );
}
