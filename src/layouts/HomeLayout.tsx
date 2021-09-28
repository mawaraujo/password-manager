import React, { ReactChild } from 'react';
import { SidebarComponent } from '../components/Sidebar/Sidebar';
import { Container, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

declare type Props = { children: ReactChild }

export function HomeLayout(props: Props) {
  const showSidebar = useSelector((state: any) => state.sidebar.showSidebar);

  return (
    <Container className="full-container" minWidth="full" mx={0} px={0} height="full">
      <SidebarComponent className={`app-sidebar ${showSidebar ? 'active' : ''}`} />

      <Box className={`app-content`}>
        { props.children }
      </Box>
    </Container>
  );
}
