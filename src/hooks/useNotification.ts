import { useToast } from '@chakra-ui/toast';
import { Notification } from '../core/types/reducers';
import { useDispatch } from 'react-redux';
import { deleteNotification } from '../core/store/actions/notifications';

export function useNotification() {
  const toast = useToast();
  const dispatch = useDispatch();

  const renderToast = (notifications: Notification[]) => {
    notifications.forEach((notification) => {
      toast({
        title: `${notification.message || 'Notification without message'}`,
        description: notification.descripton || null,
        status: notification.type || 'error',
        duration: notification.duration || 5000,
        isClosable: notification.isClosable || true,
        position: 'bottom-right',
      });

      dispatch(deleteNotification(notification));
    });
  };

  return {
    renderToast,
  };
}
