import { Action, UPDATE_SEARCH } from '../../types/actions';
import { SearchState } from '../../types/reducers';

const store: SearchState = {
  search: '',
};

export const searchReducer = (state = store, action: Action<{ search: string }>) => {
  switch (action.type) {
  case UPDATE_SEARCH:
    return {
      ...state,
      search: action.payload.search,
    };

  default: return state;
  }
};
