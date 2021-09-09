import { CREATE_PASSWORD, DELETE_PASSWORD, EDIT_PASSWORD, SELECT_PASSWORD } from '../../types/actions';
import { Password } from '../../types/reducers';

export const selectPassword = (password: Password) => {
  return {
    type: SELECT_PASSWORD,
    payload: { password },
  };
};

export const createPassword = (password: Password) => {
  return {
    type: CREATE_PASSWORD,
    payload: { password },
  };
};

export const editPassword = (password: Password) => {
  return {
    type: EDIT_PASSWORD,
    payload: { password },
  };
};

export const deletePassword = (password: Password) => {
  return {
    type: DELETE_PASSWORD,
    payload: { password },
  };
};
