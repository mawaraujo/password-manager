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
        backgroundColor="white"
        p={4}>

        <Box display="flex" mb={3} borderBottom="1px" borderBottomColor="gray.100" pb={3}>
          <Button
            mr={4}
            backgroundColor="teal.700"
            color="white"
            maxWidth={150}
            width="100%"
            onClick={() => dispatch(toggleSidebar())}>
            Menu
          </Button>

          <Button
            backgroundColor="teal.700"
            color="white"
            maxWidth={150}
            width="100%"
            onClick={() => setShowModal(true)}>
            Add entry
          </Button>
        </Box>

        <Box textAlign="right">
          <Input
            maxWidth={350}
            variant="outline"
            border="2px"
            backgroundColor="white"
            _focus={{ backgroundColor: 'white', borderColor: 'teal.700' }}
            placeholder="Quick filter"
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
