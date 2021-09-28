import React, { useState } from 'react';
import { Box, Text, Button, Input } from '@chakra-ui/react';
import { Password, PasswordState, Tag, TagState } from '../../../core/types/reducers';
import { connect, useDispatch } from 'react-redux';
import { exportAsJSONFile } from '../../../core/utilities/export-as-file';
import { importAsJSONFile } from '../../../core/utilities/import-from-file';
import { createNotification } from '../../../core/store/actions/notifications';
import { createTag } from '../../../core/store/actions/tags';
import { createPassword } from '../../../core/store/actions/passwords';

const stateMapToProps = (state: { tags: TagState, passwords: PasswordState }) => {
  return {
    TAGS: state.tags,
    PASSWORDS: state.passwords,
  };
};

declare type Props = {
  TAGS: TagState;
  PASSWORDS: PasswordState;
};

export function SettingsModalBackupModal({ TAGS, PASSWORDS }: Props) {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState(false);

  const importTags = (tags: Tag[]) => {
    tags.forEach((tag) => dispatch(createTag(tag)));
  };

  const importPasswords = (passwords: Password[]) => {
    passwords.forEach((pass) => dispatch(createPassword(pass)));
  };

  const handleImportFile = () => {
    setUploadError(false);

    importAsJSONFile(file, (result: {tags: Tag[], passwords: Password[]} | null) => {
      if (!result) {
        setUploadError(true);
        return dispatch(createNotification({ type: 'error', message: 'Error on import the backup file' }));
      }

      importTags(result?.tags);
      importPasswords(result?.passwords);
      dispatch(createNotification({ type: 'success', message: 'Backup uploaded successfully' }));
    });
  };

  return (
    <Box>
      <Text fontWeight="bold" fontSize="xl">
        Generate a backup
      </Text>

      <Text mb={4}>
        Create a backup of your passwords. You can import this information whenever you want!
      </Text>

      <Button
        mb={6}
        onClick={() => exportAsJSONFile(TAGS, PASSWORDS)}>
        Export data
      </Button>

      <hr className="hr"/>

      <Text
        mt={6}
        fontWeight="bold"
        fontSize="xl">
        Import backup
      </Text>

      <Text>
        Import your backup of your passwords.
      </Text>

      {
        uploadError && <Text color="red.700" fontWeight="bold" fontSize="xs">
          An error occurred while trying to upload the file. Try again.
        </Text>
      }

      <Box display="flex" alignItems="center" mt={4}>
        <Input
          mr={3}
          type="file"
          onChange={(e: any) => setFile(e.target.files[0]) } />

        <Button
          px={3}
          disabled={file ? false : true}
          onClick={handleImportFile}>
          Import backup
        </Button>
      </Box>
    </Box>
  );
}

export const SettingsModalBackupComponent = connect(stateMapToProps)(SettingsModalBackupModal);
