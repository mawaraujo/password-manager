import React, { useState } from 'react';
import { Box, Text, Button, FormControl, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { UserPasswordState } from '../../../core/types/reducers';
import { createOrEditPassword } from '../../../core/store/actions/userPassword';
import { createNotification } from '../../../core/store/actions/notifications';

export function SettingsModalUserComponent() {
  const dispatch = useDispatch();
  const state = useSelector((state: { userPassword: UserPasswordState }) => state);

  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const clearForm = () => {
    setPasswordMismatch(false);
    setPassword('');
    setNewPassword('');
  };

  const updatePassword = () => {
    if (password === state.userPassword.password) {
      dispatch(createOrEditPassword(newPassword));

      dispatch(createNotification({
        type: 'success',
        message: 'Access code updated successfully',
      }));

      return clearForm();
    }

    setPasswordMismatch(true);
    return dispatch(createNotification({
      type: 'error',
      message: 'The current access code does not match',
    }));
  };

  return (
    <Box>
      <Box background="gray.100" borderRadius="lg" p={4}>
        <Text fontWeight="bold" fontSize="xl" mb={3}>Update the access code</Text>

        <Box>
          <FormControl>
            <Text>Current password</Text>
            <Input
              style={passwordMismatch ? {borderWidth: 2, borderColor: 'red'} : {}}
              focusBorderColor={passwordMismatch ? 'none' : 'teal.700'}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              type="password"
              value={password}
              placeholder="Silence is golden"
              background="white" />
          </FormControl>

          <FormControl mt={3}>
            <Text>New password</Text>
            <Input
              style={passwordMismatch ? {borderWidth: 2, borderColor: 'red'} : {}}
              focusBorderColor={passwordMismatch ? 'none' : 'teal.700'}
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              autoComplete="off"
              type="password"
              placeholder="New password"
              background="white" />
          </FormControl>

          <Button
            mt={5}
            onClick={updatePassword}
            background="gray.300">
            Update changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
