import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { SETTINGS_MENU, LINKS_MENU } from "./header.data";

import logo from "../../images/logo.png";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="logo"></img>
        <p className={styles.name}>НАЗВАНИЕ</p>
      </div>
      <DropdownMenu
        content={LINKS_MENU}
        picture={
          "https://img0.liveinternet.ru/images/attach/c/3/83/478/83478422_1.gif"
        }
        pictureType="circle"
        text={"@community_name"}
        align={"left"}
      />
      <input placeholder="Search" type="search"></input>
      <DropdownMenu
        content={SETTINGS_MENU}
        picture={
          "https://img0.liveinternet.ru/images/attach/c/3/83/478/83478422_1.gif"
        }
        pictureType="square"
        text={"@user_name"}
        align={"right"}
      />
    </header>
  );
};

export default Header;
