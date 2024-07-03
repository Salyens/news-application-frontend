import { useEffect, useRef, useState, useContext } from "react";
import io from "socket.io-client";
import { NotificationContext } from "../../contexts/NotificationContext";

const useSocketNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const socket = useRef(null);
  const { setUnreadNotifications } = useContext(NotificationContext);

  useEffect(() => {
    socket.current = io(
      `${process.env.REACT_APP_BASE_URL || "http://localhost:3000"}/news`,
      { transports: ["websocket", "polling"] }
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

  return { notifications, setNotifications };
};

export default useSocketNotifications;
