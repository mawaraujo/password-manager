import { UPDATE_SEARCH } from '../../types/actions';

export const updateSearch = (search: string) => {
  return {
    type: UPDATE_SEARCH,
    payload: { search },
  };
};
