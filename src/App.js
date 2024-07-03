import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostEditor from "./components/PostEditor";
import { NotificationProvider } from "./contexts/NotificationContext";
import Login from "./components/Auth/Login";
import WithAuth from "./components/HOC/WithAuth";
import Registration from "./components/Auth/Registration";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <NotificationProvider>
        <Header />
      </NotificationProvider>
      <Routes>
        <Route
          path="/"
          element={
            <WithAuth>
              <PostEditor />
            </WithAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;
