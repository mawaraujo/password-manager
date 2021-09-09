import React, { useState, useEffect } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import { connect, useDispatch } from 'react-redux';
import { updateSearch } from '../../core/store/actions/search';
import { PasswordCreationModalComponent } from '../PasswordCreationModal';
import { Password, TagState } from '../../core/types/reducers';

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
        backgroundColor="white"
        borderBottom="1px"
        borderBottomColor="gray.200"
        p={4}>

        <Button
          backgroundColor="teal.700"
          color="white"
          mr={4}
          onClick={() => setShowModal(true)}>
          Add entry
        </Button>

        <Input
          variant="outline"
          border="2px"
          backgroundColor="white"
          _focus={{ backgroundColor: 'white', borderColor: 'teal.700' }}
          placeholder="Quick filter"
          onChange={(e) => setSearch(e.target.value)} />
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
