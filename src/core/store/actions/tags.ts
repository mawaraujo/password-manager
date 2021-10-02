import { CREATE_TAG, DELETE_TAG, EDIT_TAG, RESET_SELECTED_TAG, SELECT_TAG } from '../../types/actions';
import { Tag } from '../../types/reducers';

export const selectTag = (tag: Tag) => {
  return {
    type: SELECT_TAG,
    payload: { tag },
  };
};

export const createTag = (tag: Tag) => {
  return {
    type: CREATE_TAG,
    payload: { tag },
  };
};

export const editTag = (tag: Tag) => {
  return {
    type: EDIT_TAG,
    payload: { tag },
  };
};

export const deleteTag = (tag: Tag) => {
  return {
    type: DELETE_TAG,
    payload: { tag },
  };
};

export const resetSelectedTag = () => {
  return {
    type: RESET_SELECTED_TAG,
    payload: {},
  };
};
