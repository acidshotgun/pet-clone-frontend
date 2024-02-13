import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { Link } from "react-router-dom";

// Components
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { SETTINGS_MENU, LINKS_MENU } from "./header.data";

import logo from "../../images/logo.png";

import styles from "./Header.module.scss";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={logo} alt="logo"></img>
          </div>
          <p className={styles.name}>НАЗВАНИЕ</p>
          <DropdownMenu
            content={LINKS_MENU}
            picture={
              "https://img0.liveinternet.ru/images/attach/c/3/83/478/83478422_1.gif"
            }
            pictureType="circle"
            text={"@community_name"}
            align={"left"}
          />
        </div>

        <Search />

        <>
          {window.localStorage.getItem("token") && isAuth ? (
            <DropdownMenu
              content={SETTINGS_MENU}
              picture={
                "https://i.pinimg.com/564x/27/d1/03/27d1032d285f26f60a7e3881d9d0da4b.jpg"
              }
              pictureType="square"
              text={"@user_name"}
              align={"right"}
            />
          ) : (
            <div className={styles.auth}>
              <Button text="Log in" type="grey_button" />

              <Link to="/registration">
                <Button text="Sign up" type="white_button" />
              </Link>
            </div>
          )}
        </>
      </div>
    </header>
  );
};

export default Header;
