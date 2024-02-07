import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

// Pages
import Registration from "./pages/Registration/Registration";
import UserPage from "./pages/UserPage/UserPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route path="/users/:userId" element={<UserPage />} />
            <Route
              path="/dashboards/:dashboardId"
              element={<DashboardPage />}
            />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
