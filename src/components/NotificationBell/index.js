import React, { useState, useEffect, useContext, useRef } from "react";
import io from "socket.io-client";
import styles from "./notificationBell.module.scss";
import { NotificationContext } from "../NotificationContext";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const socket = useRef(null);
  const { unreadNotifications, setUnreadNotifications } =
    useContext(NotificationContext);

  useEffect(() => {
    socket.current = io(
      process.env.REACT_APP_API_URL || "http://localhost:3000"
    );

    socket.current.on("newsCreated", (news) => {
      setNotifications((prev) => [
        ...prev,
        { type: "created", message: `News created: ${news.title}` },
      ]);
      setUnreadNotifications((prev) => prev + 1);
    });

    socket.current.on("newsUpdated", (news) => {
      setNotifications((prev) => [
        ...prev,
        { type: "updated", message: `News updated: ${news.title}` },
      ]);
      setUnreadNotifications((prev) => prev + 1);
    });

    socket.current.on("newsDeleted", ({ id, title }) => {
      setNotifications((prev) => [
        ...prev,
        { type: "deleted", message: `News deleted: ${title} (ID: ${id})` },
      ]);
      setUnreadNotifications((prev) => prev + 1);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [setUnreadNotifications]);

  const toggleNotifications = () => {
    if (!notifications.length) return null;

    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      setUnreadNotifications(0);
    }
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
