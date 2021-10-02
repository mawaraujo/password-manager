import React, { useEffect, useState } from 'react';
import { HomeLayout } from '../../layouts/HomeLayout';
import { NotificationState, UserState } from '../../core/types/reducers';
import { connect } from 'react-redux';
import { useNotification } from '../../hooks/useNotification';
import { PasswordDatatableComponent } from '../../components/PasswordDatatable';
import { ActionsHeaderComponent } from '../../components/ActionsHeader';
import { AuthComponent } from '../../components/Auth';
import { useUserAccess } from '../../hooks/useAccess';

declare type Props = {
  NOTIFICATIONS_STATE: NotificationState,
  USER_STATE: UserState
}

function HomePage({ NOTIFICATIONS_STATE, USER_STATE }: Props) {
  const { renderToast } = useNotification();
  const { revokeAccess } = useUserAccess();

  const [selectedPassword, setSelectedPassword] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (NOTIFICATIONS_STATE.notifications) renderToast(NOTIFICATIONS_STATE.notifications);
  }, [NOTIFICATIONS_STATE]);

  useEffect(() => {
    return () => {
      revokeAccess();
    };
  }, []);

  return (
    <>
      {
        USER_STATE.hasAccess ?
          <HomeLayout>
            <>
              <ActionsHeaderComponent
                setSelectedPassword={setSelectedPassword}
                showModal={showModal}
                setShowModal={setShowModal}
                selectedPassword={selectedPassword} />

              <PasswordDatatableComponent
                setShowModal={setShowModal}
                setSelectedPassword={setSelectedPassword} />
            </>
          </HomeLayout> :
          <AuthComponent />
      }
    </>
  );
}

const mapStateToProps = (state: { notifications: NotificationState, user: UserState }) => {
  return {
    NOTIFICATIONS_STATE: state.notifications,
    USER_STATE: state.user,
  };
};

export default connect(mapStateToProps)(HomePage);
