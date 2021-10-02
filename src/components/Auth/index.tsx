import React, { useEffect, useState } from 'react';
import { useUserAccess } from '../../hooks/useAccess';
import { PrompModalComponent } from '../PromptModal';
import { AccessDeniedComponent } from './AccessDenied';

export function AuthComponent() {
  const [showPasswordCreationModal, setShowPasswordCreationModal] = useState(false);
  const [showCheckAccessModal, setShowCheckAccessModal] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  const [inputPassword, setInputPassword] = useState('');

  const { passwordWrong, setPasswordWrong, userPassword, userHasAccess, handleAccess, generatePassword } = useUserAccess();

  const checkUserAccess = () => {
    if (!userHasAccess) return handleAccess(inputPassword);
  };

  useEffect(() => setPasswordWrong(false), [inputPassword]);

  useEffect(() => {
    if (userPassword) setShowCheckAccessModal(true);
    else setShowPasswordCreationModal(true);
  }, []);

  return (
    <>
      {
        showPasswordCreationModal &&
        <PrompModalComponent
          isClosable={false}
          title="Creating an access code"
          description="Welcome, to start you must create a security key"
          onAccept={generatePassword}
          onCloseModal={() => false}
          value={inputPassword}
          inputType="text"
          setValue={setInputPassword}/>
      }

      {
        showCheckAccessModal &&
        <PrompModalComponent
          title="Login"
          description="Enter your access code to continue 🔒"
          onAccept={checkUserAccess}
          onCloseModal={() => (setShowCheckAccessModal(false), setAccessDenied(true))}
          value={inputPassword}
          inputWrong={passwordWrong}
          inputWrongText="Your access code is wrong. Try again."
          setValue={setInputPassword} />
      }

      { accessDenied && <AccessDeniedComponent /> }
    </>
  );
}
