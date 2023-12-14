import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Search from "../Search/Search";
import { SETTINGS_MENU, LINKS_MENU } from "./header.data";

import logo from "../../images/logo.png";

import styles from "./Header.module.scss";

const Header = () => {
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

        <div>
          <DropdownMenu
            content={SETTINGS_MENU}
            picture={
              "https://img0.liveinternet.ru/images/attach/c/3/83/478/83478422_1.gif"
            }
            pictureType="square"
            text={"@user_name"}
            align={"right"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
