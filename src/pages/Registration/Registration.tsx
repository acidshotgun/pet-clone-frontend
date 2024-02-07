import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRegister,
  // selectIsAuth,
  selectUserId,
} from "../../redux/slices/auth";

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
    <form onSubmit={onHandleSubmit}>
      <input
        placeholder="nickName"
        type="text"
        name="nickName"
        value={formData.nickName}
        onChange={onHandleChange}
      />
      <input
        placeholder="email"
        type="text"
        name="email"
        value={formData.email}
        onChange={onHandleChange}
      />
      <input
        placeholder="password"
        type="text"
        name="password"
        value={formData.password}
        onChange={onHandleChange}
      />
      <input
        placeholder="avatarUrl"
        type="text"
        name="avatarUrl"
        value={formData.avatarUrl}
        onChange={onHandleChange}
      />
      <button type="submit">SEND</button>
    </form>
  );
};

export default Registration;
