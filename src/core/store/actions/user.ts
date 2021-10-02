import { EDIT_USER_HAS_ACCESS } from '../../types/actions';

export const toggleUserAccess = (hasAccess: Boolean) => {
  return {
    type: EDIT_USER_HAS_ACCESS,
    payload: { hasAccess },
  };
};
