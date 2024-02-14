import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAuth } from "./redux/slices/auth";

// Components
import Header from "./components/Header/Header";

// Pages
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Page404 from "./pages/404/Page404";

import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();

  // Получаем роут для отрисовки хедэра
  // Регистрация - хэдэра нет
  const location: any = useLocation();

  useEffect(() => {
    dispatch(fetchAuth());
  });

  return (
    <>
      {location.pathname === "/registration" ||
      location.pathname === "/login" ? null : (
        <Header />
      )}
      <div className={styles.container}>
        <Routes>
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/dashboards/:dashboardId" element={<DashboardPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
