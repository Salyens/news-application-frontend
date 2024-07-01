import React, { useState, useContext } from "react";
import useSocketNotifications from "../../hooks/useSocketNotifications";
import { NotificationContext } from "../../contexts/NotificationContext";
import styles from "./notificationBell.module.scss";

const NotificationBell = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const { notifications } = useSocketNotifications();
  const { unreadNotifications, setUnreadNotifications } = useContext(NotificationContext);

  const toggleNotifications = () => {
    if (!notifications.length) return null;
    setShowNotifications(!showNotifications);
    if (!showNotifications) setUnreadNotifications(0);
  };

  return (
    <div className={styles.notificationBell}>
      <span className={styles.bellIcon} onClick={toggleNotifications}>
        🔔
      </span>
      {unreadNotifications > 0 && (
        <span className={styles.notificationCount}>{unreadNotifications}</span>
      )}
      {showNotifications && (
        <div className={styles.notifications}>
          {notifications.map((notification, index) => (
            <div key={index} className={styles.notification}>
              {notification.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
