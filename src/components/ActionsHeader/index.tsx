import React, { useState, useEffect } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import { connect, useDispatch } from 'react-redux';
import { updateSearch } from '../../core/store/actions/search';
import { PasswordCreationModalComponent } from '../PasswordCreationModal';
import { Password, TagState } from '../../core/types/reducers';
import { toggleSidebar } from '../../core/store/actions/sidebar';

const mapStateToProps = (state: { tags: TagState }) => {
  return {
    TAG_STATE: state.tags,
  };
};

declare type Props = {
  TAG_STATE: TagState;
  selectedPassword: Password | undefined | null;
  setSelectedPassword: (state: any) => void;
  showModal: boolean,
  setShowModal: (state: boolean) => void;
}

function ActionsHeader({ TAG_STATE, selectedPassword, showModal, setShowModal, setSelectedPassword }: Props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleUpdateSearch = () => dispatch(updateSearch(search));

  useEffect(() => {
    handleUpdateSearch();
  }, [search]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        borderBottom="1px"
        borderBottomColor="gray.100"
        backgroundColor="white"
        p={4}>

        <Box display="flex" mb={3}>
          <Button
            mr={4}
            color="teal.700"
            variant="outline"
            colorScheme="teal"
            _focus={{ outline: 'none' }}
            maxWidth={70}
            width="100%"
            onClick={() => dispatch(toggleSidebar())}>
            <svg xmlns="http://www.w3.org/2000/svg" className="app-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </Button>

          <Button
            variant="outline"
            color="teal.700"
            colorScheme="teal"
            _focus={{ outline: 'none' }}
            maxWidth={70}
            width="100%"
            onClick={() => setShowModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="app-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Button>
        </Box>

        <Box textAlign="right">
          <Input
            width="100%"
            variant="solid"
            background="gray.100"
            _placeholder={{ color: 'black' }}
            placeholder="Quick search"
            onChange={(e) => setSearch(e.target.value)} />
        </Box>
      </Box>

      <PasswordCreationModalComponent
        setSelectedPassword={setSelectedPassword}
        tagState={TAG_STATE}
        showModal={showModal}
        setShowModal={setShowModal}
        passwordSelected={selectedPassword} />
    </>
  );
}

export const ActionsHeaderComponent = connect(mapStateToProps)(ActionsHeader);
