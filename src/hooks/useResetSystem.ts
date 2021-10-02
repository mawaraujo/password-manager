import { useDispatch } from 'react-redux';
import { createNotification } from '../core/store/actions/notifications';

export function useResetSystem() {
  const dispatch = useDispatch();

  const resetApp = () => {
    let counter = 6;
    window.localStorage.removeItem('persist:root');

    dispatch(createNotification({ type: 'success', message: 'Application restored successfully' }));

    setInterval(() => {
      if (counter <= 1) return location.reload();

      counter--;
      return dispatch(createNotification({ type: 'warning', message: `Reloading app in ${counter}` }));
    }, 1000);
  };

  return {
    resetApp,
  };
}
