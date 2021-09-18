import { Action, CREATE_TAG, DELETE_TAG, RESET_SELECTED_TAG, SELECT_TAG, EDIT_TAG } from '../../types/actions';
import { Tag, TagState } from '../../types/reducers';

const store: TagState = {
  selectedTag: { id: 0, name: 'All', icon: 'all' },
  tags: [
    {
      id: 0,
      name: 'All',
      icon: 'all',
    },
  ],
};

export const tagReducer = (state = store, action: Action<{ tag: Tag }>) => {
  switch (action.type) {
  case CREATE_TAG:
    return {
      ...state,
      tags: (action.payload.tag.id !== 0 && !state.tags.some((tag) => tag.id === action.payload.tag.id)) ?
        [...state.tags, action.payload.tag] :
        state.tags,
    };

  case DELETE_TAG:
    if (action.payload.tag.id === 0) return state;

    return {
      ...state,
      tags: state.tags.filter((item) => item.id !== action.payload.tag.id),
    };

  case RESET_SELECTED_TAG:
    return {
      ...state,
      selectedTag: { id: 0, name: 'All', icon: 'all' },
    };

  case SELECT_TAG:
    return {
      ...state,
      selectedTag: action.payload.tag,
    };

  case EDIT_TAG:
    return {
      ...state,
      tags: state.tags.map((content) => {
        if (content.id === action.payload.tag.id) {
          return {
            ...content,
            name: action.payload.tag.name,
            icon: action.payload.tag.icon,
          };
        }

        return content;
      }),
    };

  default: return state;
  }
};
