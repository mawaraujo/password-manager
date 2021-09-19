import { Dispatch, SetStateAction } from 'react';
import { TagState, PasswordState, Password } from '../../core/types/reducers';

export declare type Props = {
  TAG_STATE: TagState;
  PASSWORD_STATE: PasswordState;
  setSelectedPassword: (state: Password) => void;
  setShowModal: (state: boolean) => void;
}

export declare type RenderTableItemsProps = {
  password: Password;
  handleClipboard: (val: string | undefined) => void;
  handleEdit: (password: Password) => void;
  handleDelete: (password: Password) => void;
  setShowViewModal: Function;
  setViewModalItem: Function;
}

export declare type IpasswordToDelete = [
  passwordToDelete: any,
  setPasswordToDelete: Dispatch<SetStateAction<Password | any>>
]

export declare type IviewModalItem = [
  viewModalItem: any,
  setViewModalItem: Dispatch<SetStateAction<Password | any>>
]
