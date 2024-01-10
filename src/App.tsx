import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

// Pages
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
            <Route path="/" element={<UserPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
