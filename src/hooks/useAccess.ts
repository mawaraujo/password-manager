import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleUserAccess } from '../core/store/actions/user';
import { createOrEditPassword } from '../core/store/actions/userPassword';
import { UserPasswordState, UserState } from '../core/types/reducers';

export function useUserAccess() {
  const dispatch = useDispatch();
  const state = useSelector((state: { user: UserState, userPassword: UserPasswordState }) => state);
  const [passwordWrong, setPasswordWrong] = useState(false);

  /**
   *
   * @param {string} password User password
   * @return {Boolean}
   */
  const handleAccess = (password: String): Boolean => {
    if (password !== state.userPassword.password) {
      setPasswordWrong(true);
      return false;
    }

    dispatch(toggleUserAccess(true));
    return true;
  };

  const revokeAccess = () => dispatch(toggleUserAccess(false));

  /**
   * @param {String} password
   * @return {void} Generate a new password
   */
  const generatePassword = (password: String): void => {
    console.log(password);
    dispatch(createOrEditPassword(password));
    dispatch(toggleUserAccess(true));
  };

  return {
    userHasAccess: state.user.hasAccess,
    userPassword: state.userPassword.password,
    handleAccess,
    generatePassword,
    revokeAccess,
    passwordWrong,
    setPasswordWrong,
  };
}
