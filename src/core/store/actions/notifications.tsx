import { CREATE_NOTIFICATION, DELETE_NOTIFICATION } from '../../types/actions';
import { Notification } from '../../types/reducers';

export const createNotification = (notification: Notification) => {
  return {
    type: CREATE_NOTIFICATION,
    payload: { notification },
  };
};

export const deleteNotification = (notification: Notification) => {
  return {
    type: DELETE_NOTIFICATION,
    payload: { notification },
  };
};
