import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRegister,
  // selectIsAuth,
  selectUserId,
} from "../../redux/slices/auth";

import ComponentLayout from "../../components/Layout/ComponentLayout/ComponentLayout";

import styles from "./Registration.module.scss";
import app_image from "../../images/app_logo.png";
import app_logo from "../../images/logo.png";

const Registration = () => {
  const [formData, setFormData] = useState({
    nickName: "",
    email: "",
    password: "",
    avatarUrl: "",
  });

  const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);
  const userId = useSelector(selectUserId);

  const onHandleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();

    const data = await dispatch(fetchRegister(formData));

    if (!data.payload) {
      return alert("Не удалось зарегистрироваться");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (Boolean(userId)) {
    return <Navigate to={`/users/${userId}`} />;
  }

  return (
    <div className={styles.wrapper}>
      <ComponentLayout>
        <div className={styles.form_container}>
          <div className={styles.app_image}>
            <img src={app_image} alt="app_image"></img>
          </div>

          <form className={styles.form} onSubmit={onHandleSubmit}>
            <div className={styles.app_logo}>
              <img src={app_logo} alt="app_logo" />
              <span className={styles.registration}>REGISTRATION</span>
            </div>

            <input
              className={styles.input}
              placeholder="nickName"
              type="text"
              name="nickName"
              value={formData.nickName}
              onChange={onHandleChange}
            />
            <input
              className={styles.input}
              placeholder="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={onHandleChange}
            />
            <input
              className={styles.input}
              placeholder="password"
              type="text"
              name="password"
              value={formData.password}
              onChange={onHandleChange}
            />
            <input
              className={styles.input}
              placeholder="avatarUrl"
              type="text"
              name="avatarUrl"
              value={formData.avatarUrl}
              onChange={onHandleChange}
            />
            <button type="submit">SEND</button>
          </form>
        </div>
      </ComponentLayout>
    </div>
  );
};

export default Registration;
