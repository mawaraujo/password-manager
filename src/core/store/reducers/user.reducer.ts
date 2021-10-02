import { Action, EDIT_USER_HAS_ACCESS } from '../../types/actions';
import { UserState } from '../../types/reducers';

const store: UserState = {
  hasAccess: false,
};

export const userReducer = (state = store, action: Action<{ hasAccess?: Boolean }>) => {
  switch (action.type) {
  case EDIT_USER_HAS_ACCESS:
    return {
      ...state,
      hasAccess: action.payload.hasAccess,
    };

  default: return state;
  }
};
