import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import UserPage from "./pages/UserPage/UserPage";

import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route path="/users/test_user" element={<UserPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
