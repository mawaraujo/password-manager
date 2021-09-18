import { Action, CREATE_PASSWORD, DELETE_PASSWORD, EDIT_PASSWORD } from '../../types/actions';
import { PasswordState, Password } from '../../types/reducers';

const store: PasswordState = {
  passwords: [],
};

export const passwordReducer = (state = store, action: Action<{ password: Password }>) => {
  switch (action.type) {
  case CREATE_PASSWORD:
    return {
      ...state,
      passwords: (!state.passwords.some((pass) => pass.token === action.payload.password.token)) ?
        [...state.passwords, action.payload.password] :
        state.passwords,
    };

  case DELETE_PASSWORD:
    return {
      ...state,
      passwords: state.passwords.filter((item) => item.token !== action.payload.password.token),
    };

  case EDIT_PASSWORD:
    return {
      ...state,
      passwords: state.passwords.map((content) => {
        if (content.token === action.payload.password.token) {
          return {
            ...content,
            name: action.payload.password.name,
            username: action.payload.password.username,
            email: action.payload.password.email,
            password: action.payload.password.password,
            description: action.payload.password.description,
            url: action.payload.password.url,
            tagId: action.payload.password.tagId,
          };
        }

        return content;
      }),
    };

  default: return state;
  }
};
