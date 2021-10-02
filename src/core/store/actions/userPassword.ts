import { CREATE_USER_PASSWORD_ACCESS } from '../../types/actions';

export const createOrEditPassword = (password: String) => {
  return {
    type: CREATE_USER_PASSWORD_ACCESS,
    payload: { password },
  };
};
