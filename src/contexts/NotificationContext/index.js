
import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  return (
    <NotificationContext.Provider value={{ unreadNotifications, setUnreadNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
