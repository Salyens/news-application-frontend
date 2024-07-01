import NotificationBell from "./components/NotificationBell";
import  PostEditor  from "./components/PostEditor";
import { NotificationProvider } from "./contexts/NotificationContext";
import styles from "./app.module.scss";

const App = () => {
  return (
    <NotificationProvider>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1>News Application</h1>
          <NotificationBell />
        </header>
        <main>
          <PostEditor />
        </main>
      </div>
    </NotificationProvider>
  );
};

export default App;
