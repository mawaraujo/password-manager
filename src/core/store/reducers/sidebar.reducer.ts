import { Action, TOGGLE_SIDEBAR } from '../../types/actions';
import { SidebarState } from '../../types/reducers';

const store: SidebarState = {
  showSidebar: true,
};

export const sidebarReducer = (state = store, action: Action<{ showSidebar: boolean }>) => {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    console.log(!state.showSidebar);

    return {
      ...state,
      showSidebar: !state.showSidebar,
    };

  default: return state;
  }
};
