import { Link } from "react-router-dom";
import NotificationBell from "../NotificationBell";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <h1>News Application</h1>
      <NotificationBell />
      <div className={styles.linkWrapper}>
        <Link className={styles.link} to="/login">
          Login
        </Link>
        <Link className={styles.link} to="/registration">
          Registration
        </Link>
      </div>
    </header>
  );
};

export default Header;
