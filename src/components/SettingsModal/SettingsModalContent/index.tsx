import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { SettingsModalBackupComponent } from '../SettingsModalBackup';
import { SettingsModalContentOptionComponent } from '../SettingsModalContentOption';
import { SettingsModalSystemComponent } from '../SettingsModalSystem';
import { SettingsModalUserComponent } from '../SettingsModalUser';

export function SettingsModalContentComponent() {
  const [selectedTab, setSelectedTab] = useState('backup');

  return (
    <Box
      className="left-modal"
      display="flex"
      flexDirection="column"
      height="100%"
      minHeight={400}>

      <Box
        className="tabs"
        width="100%"
        p={3}
        display="flex">

        <SettingsModalContentOptionComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          optionName="Backup"
          optionValue="backup" />

        <SettingsModalContentOptionComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          optionName="User"
          optionValue="user" />

        <SettingsModalContentOptionComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          optionName="System settings"
          optionValue="system" />
      </Box>

      <Box flex={1} p={3}>
        { selectedTab === 'backup' && <SettingsModalBackupComponent /> }
        { selectedTab === 'user' && <SettingsModalUserComponent /> }
        { selectedTab === 'system' && <SettingsModalSystemComponent /> }
      </Box>
    </Box>
  );
}
