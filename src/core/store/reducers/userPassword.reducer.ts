import { Action, CREATE_USER_PASSWORD_ACCESS } from '../../types/actions';
import { UserPasswordState } from '../../types/reducers';

const store: UserPasswordState = {
  password: null,
};

export const userPasswordReducer = (state = store, action: Action<{ password?: String }>) => {
  switch (action.type) {
  case CREATE_USER_PASSWORD_ACCESS:
    return {
      ...state,
      password: action.payload.password,
    };

  default: return state;
  }
};
