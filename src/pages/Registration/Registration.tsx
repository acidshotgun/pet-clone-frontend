import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../../redux/slices/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

import ComponentLayout from "../../components/Layout/ComponentLayout/ComponentLayout";

import styles from "./Registration.module.scss";
import app_image from "../../images/app_logo.png";
import app_logo from "../../images/logo.png";

interface IFormInput {
  nickName: string;
  email: string;
  password: string;
  avatarUrl: string;
}

const Registration = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.isLogged) {
      localStorage.setItem("token", userData.data.token);
      navigate(`/users/${userData.data._id}`);
    }
  }, [userData.isLogged]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    await dispatch(fetchRegister(formData));
  };

  return (
    <div className={styles.wrapper}>
      <ComponentLayout>
        {userData.status === "error" && <h1>{userData.errors[0].msg}</h1>}
        <div className={styles.form_container}>
          <div className={styles.app_image}>
            <img src={app_image} alt="app_image"></img>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.app_logo}>
              <img src={app_logo} alt="app_logo" />
              <span className={styles.registration}>REGISTRATION</span>
            </div>

            {/* <label>Nickname</label> */}
            {errors.nickName && (
              <p className={styles.error_message}>{errors.nickName.message}</p>
            )}
            <input
              className={styles.input}
              placeholder="nickName"
              type="text"
              {...register("nickName", {
                required: { value: true, message: "Поле обязательно" },
                minLength: { value: 4, message: "Минимальная длина ника 4" },
                maxLength: { value: 15, message: "Максимальная длина ника 15" },
              })}
            />

            {errors.email && (
              <p className={styles.error_message}>{errors.email.message}</p>
            )}
            <input
              className={styles.input}
              placeholder="email"
              type="text"
              {...register("email", {
                required: { value: true, message: "Поле обязательно" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неверный формат почты",
                },
              })}
            />

            {errors.password && (
              <p className={styles.error_message}>{errors.password.message}</p>
            )}
            <input
              className={styles.input}
              placeholder="password"
              type="password"
              value={"123456gg"}
              {...register("password", {
                required: { value: true, message: "Поле обязательно" },
                minLength: { value: 6, message: "Минимальная длина пароля 6" },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: "Пароль должен содержать заглавные буквы + цифры",
                },
              })}
            />

            {errors.avatarUrl && (
              <p className={styles.error_message}>{errors.avatarUrl.message}</p>
            )}
            <input
              className={styles.input}
              placeholder="avatarUrl"
              type="text"
              value={
                "https://sun6-22.userapi.com/impg/hPlUKDSs615irosTOHjm4omF8ObJCOC6nBYyZw/79jwpguwEtc.jpg?size=1280x720&quality=95&sign=682faf74ccb25c17f6a4cbbf64b11ecc&type=album"
              }
              {...register("avatarUrl", {
                required: {
                  value: true,
                  message: "Поле обязательно (нужна ссылка)",
                },
              })}
            />
            <button type="submit">SEND</button>
          </form>
        </div>
      </ComponentLayout>
    </div>
  );
};

export default Registration;
