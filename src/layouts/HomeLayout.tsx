import React, { ReactChild } from 'react';
import { SidebarComponent } from '../components/Sidebar';
import { Container, Box } from '@chakra-ui/react';

declare type Props = { children: ReactChild }

export function HomeLayout(props: Props) {
  return (
    <Container minWidth="full" mx={0} px={0} height="full">
      <SidebarComponent className="app-sidebar" />

      <Box className="app-content">
        { props.children }
      </Box>
    </Container>
  );
}
