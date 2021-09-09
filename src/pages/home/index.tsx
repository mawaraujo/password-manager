import React, { useEffect, useState } from 'react';
import { HomeLayout } from '../../layouts/HomeLayout';
import { NotificationState } from '../../core/types/reducers';
import { connect } from 'react-redux';
import { useNotification } from '../../hooks/useNotification';
import { PasswordGroupComponent } from '../../components/PasswordGroup';
import { ActionsHeaderComponent } from '../../components/ActionsHeader';

const mapStateToProps = (state: { notifications: NotificationState }) => {
  return {
    NOTIFICATIONS_STATE: state.notifications,
  };
};

declare type Props = {
  NOTIFICATIONS_STATE: NotificationState;
}

function HomePage({ NOTIFICATIONS_STATE }: Props) {
  const { renderToast } = useNotification();

  const [selectedPassword, setSelectedPassword] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (NOTIFICATIONS_STATE.notifications) renderToast(NOTIFICATIONS_STATE.notifications);
  }, [NOTIFICATIONS_STATE]);

  return (
    <HomeLayout>
      <>
        <ActionsHeaderComponent
          setSelectedPassword={setSelectedPassword}
          showModal={showModal}
          setShowModal={setShowModal}
          selectedPassword={selectedPassword} />

        <PasswordGroupComponent
          setShowModal={setShowModal}
          setSelectedPassword={setSelectedPassword} />
      </>
    </HomeLayout>
  );
}

export default connect(mapStateToProps)(HomePage);
