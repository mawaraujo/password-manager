import React from 'react';
import { PasswordState, TagState } from '../../core/types/reducers';
import { connect } from 'react-redux';
import { PasswordTableComponent } from '../PasswordTable';
import { PasswordTableEmptyComponent } from '../PasswordTableEmpty';

const mapStateToProps = (state: { tags: TagState, passwords: PasswordState }) => {
  return {
    TAG_STATE: state.tags,
    PASSWORD_STATE: state.passwords,
  };
};

declare type Props = {
  TAG_STATE: TagState;
  PASSWORD_STATE: PasswordState;
  setSelectedPassword: (state: any) => void;
  setShowModal: (state: boolean) => void;
}

function PasswordGroup({ TAG_STATE, PASSWORD_STATE, setSelectedPassword, setShowModal }: Props) {
  return (
    <>{
      PASSWORD_STATE.passwords?.length ?
        <PasswordTableComponent
          setShowModal={setShowModal}
          setSelectedPassword={setSelectedPassword}
          PASSWORD_STATE={PASSWORD_STATE}
          TAG_STATE={TAG_STATE} /> :
        <PasswordTableEmptyComponent />
    }</>
  );
}

export const PasswordGroupComponent = connect(mapStateToProps)(PasswordGroup);
