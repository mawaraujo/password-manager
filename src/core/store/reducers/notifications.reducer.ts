import { Action, CREATE_NOTIFICATION, DELETE_NOTIFICATION } from '../../types/actions';
import { Notification, NotificationState } from '../../types/reducers';

const store: NotificationState = {
  notifications: [],
};

export const notificationReducer = (state = store, action: Action<{ notification: Notification }>) => {
  switch (action.type) {
  /**
   * Las notificaciones deben tener mensajes que diferencien un
   * elemento del otro (ver porque en el caso DELETE)
   */
  case CREATE_NOTIFICATION:
    return {
      ...state,
      notifications: [...state.notifications, action.payload.notification],
    };

  case DELETE_NOTIFICATION:
    return {
      ...state,
      notifications: state.notifications.filter((item) =>
        item.message !== action.payload.notification.message),
    };
  default: return state;
  }
};
