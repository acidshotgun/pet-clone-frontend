import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, selectIsAuth } from "../../redux/slices/auth";
import { useForm, SubmitHandler } from "react-hook-form";

import ComponentLayout from "../../components/Layout/ComponentLayout/ComponentLayout";

import styles from "./Login.module.scss";
import app_image from "../../images/app_logo.png";
import app_logo from "../../images/logo.png";

interface IFormInput {
  email: string;
  password: string;
}

// TODO
// При неверных данных
// Я получаю 400 ошибку
// Как поместить сообщение об ошибке в стейт???

const Login = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectIsAuth);
  const loginData = useSelector((state: any) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    const data = await dispatch(fetchLogin(formData));

    if (!data.payload) {
      console.log(loginData);
      return alert("Не верный логин или пароль");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (Boolean(userId?._id)) {
    return <Navigate to={`/users/${userId?._id}`} />;
  }

  return (
    <div className={styles.wrapper}>
      <ComponentLayout>
        <div className={styles.form_container}>
          <div className={styles.app_image}>
            <img src={app_image} alt="app_image"></img>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.app_logo}>
              <img src={app_logo} alt="app_logo" />
              <span className={styles.registration}>LOG IN</span>
            </div>

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
              {...register("password", {
                required: { value: true, message: "Поле обязательно" },
              })}
            />
            <button type="submit">Log in</button>
          </form>
        </div>
      </ComponentLayout>
    </div>
  );
};

export default Login;
