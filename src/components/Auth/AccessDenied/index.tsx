import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useResetSystem } from '../../../hooks/useResetSystem';
import { ActionModalComponent } from '../../ActionModal';

export function AccessDeniedComponent() {
  const { resetApp } = useResetSystem();
  const [showResetModal, setShowResetModal] = useState(false);

  return (
    <Box
      p={5}
      mx="auto"
      height="100vh"
      maxWidth="md"
      display="flex"
      justifyContent="center"
      flexDirection="column">
      <Text fontWeight="bold" fontSize="xl">
        You do not have access to continue
      </Text>

      <Text textColor="gray.700" mb={5} fontSize="sm">
        Reload the page and try again or restore the application.
      </Text>

      <Button
        colorScheme="red"
        onClick={() => setShowResetModal(true)}>
        Restore the application
      </Button>

      {
        showResetModal &&
        <ActionModalComponent
          title="Restore the application"
          description="Do you want to delete the information from this device? This action cannot be reversed"
          onAccept={resetApp}
          onClose={() => setShowResetModal(false)} />
      }
    </Box>
  );
}
