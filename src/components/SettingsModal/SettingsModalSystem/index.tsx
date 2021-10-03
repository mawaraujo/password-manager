import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

import { ConfirmActionModalComponent } from '../../ConfirmActionModal';
import { useResetSystem } from '../../../hooks/useResetSystem';

export function SettingsModalSystemComponent() {
  const [showResetModal, setShowResetModal] = useState(false);
  const { resetApp } = useResetSystem();

  return (
    <Box>
      <Box background="gray.100" borderRadius="lg" p={4}>
        <Text fontWeight="bold" fontSize="xl">Restore application defaults</Text>
        <Text mb={4} color="gray.500">This action will remove your passwords completely</Text>

        <Button colorScheme="red" onClick={() => setShowResetModal(true)}>
          Restore the application
        </Button>

        {
          showResetModal &&
          <ConfirmActionModalComponent
            handleOK={resetApp}
            handleCancel={() => setShowResetModal(false)}
            title="Restore the application"
            colorScheme="red"
            description="Do you want to continue? This action will be irreversible" />
        }
      </Box>
    </Box>
  );
}
