import DropdownMenu from "../DropdownMenu/DropdownMenu";

import logo from "../../images/logo.png";

import pictures from "../../images/icons/menu/pictures.svg";
import edit from "../../images/icons/menu/edit.svg";
import settings from "../../images/icons/menu/settings.svg";
import messages from "../../images/icons/menu/messages.svg";
import dashboard from "../../images/icons/menu/dashboard.svg";
import news from "../../images/icons/menu/news.svg";
import person from "../../images/icons/menu/person.svg";

import styles from "./Header.module.scss";

const linksMenu = [
  { name: "Main page", link: "#" },
  { name: "Main page", link: "#" },
  { name: "Main page", link: "#" },
  { name: "Main page", link: "#" },
];

const settingsMenu = [
  { name: "My page", icon: person, link: "#" },
  { name: "News", icon: news, link: "#" },
  { name: "Messages", icon: messages, link: "#" },
  { name: "Dashboards", icon: dashboard, link: "#" },
  { name: "Pictures", icon: pictures, link: "#" },
  { name: "separator", link: "#" },
  { name: "Edit profile", icon: edit, link: "#" },
  { name: "Settings", icon: settings, link: "#" },
];

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="logo"></img>
        <p className={styles.name}>НАЗВАНИЕ</p>
      </div>
      <div className={styles.dropdownLinks}>
        <DropdownMenu
          content={linksMenu}
          picture={
            "https://img0.liveinternet.ru/images/attach/c/3/83/478/83478422_1.gif"
          }
          pictureType="circle"
          text={"@community_name"}
        />
      </div>
      <input placeholder="Search" type="search"></input>
      <div className={styles.dropdownUser}>
        <DropdownMenu
          content={settingsMenu}
          picture={
            "https://img0.liveinternet.ru/images/attach/c/3/83/478/83478422_1.gif"
          }
          pictureType="square"
          text={"@user_name"}
        />
      </div>
    </header>
  );
};

export default Header;
