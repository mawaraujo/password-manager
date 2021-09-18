import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { SettingsModalBackupComponent } from '../SettingsModalBackup';
import { SettingsModalContentOptionComponent } from '../SettingsModalContentOption';
import { SettingsModalSystemComponent } from '../SettingsModalSystem';

export function SettingsModalContentComponent() {
  const [selectedTab, setSelectedTab] = useState('backup');

  return (
    <Box className="left-modal" display="flex" height="100%" minHeight={400}>
      <Box
        borderRight="1px"
        borderRightColor="gray.300"
        className="tabs"
        width="100%"
        minHeight="100%"
        maxWidth={200}>

        <SettingsModalContentOptionComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          optionName="Backup Data"
          optionValue="backup" />

        <SettingsModalContentOptionComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          optionName="System"
          optionValue="system" />
      </Box>

      <Box flex={1} p={6}>
        { selectedTab === 'backup' && <SettingsModalBackupComponent /> }
        { selectedTab === 'system' && <SettingsModalSystemComponent /> }
      </Box>
    </Box>
  );
}
