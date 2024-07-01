
import styles from "./app.module.scss";
import NotificationBell from "./components/NotificationBell";
import { NotificationProvider } from "./components/NotificationContext";
import  PostEditor  from "./components/PostEditor";

const App = () => {
  return (
    <NotificationProvider>
      <div className={styles.App}>
        <header className={styles["App-header"]}>
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
