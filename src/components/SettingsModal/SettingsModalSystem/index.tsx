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
      <Text mb={4} fontWeight="bold" fontSize="xl">
        Restore application defaults
      </Text>

      <Button onClick={() => setShowResetModal(true)}>Restore app</Button>

      {
        showResetModal &&
        <ConfirmActionModalComponent
          handleOK={handleResetApp}
          handleCancel={() => setShowResetModal(false)}
          title="Restore app"
          description="Are you sure of this? This action will be irreversible" />
      }
    </Box>
  );
}
