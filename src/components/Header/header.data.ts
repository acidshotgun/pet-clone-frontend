import pictures from "../../images/icons/menu/pictures.svg";
import edit from "../../images/icons/menu/edit.svg";
import settings from "../../images/icons/menu/settings.svg";
import messages from "../../images/icons/menu/messages.svg";
import dashboard from "../../images/icons/menu/dashboard.svg";
import news from "../../images/icons/menu/news.svg";
import person from "../../images/icons/menu/person.svg";

export const SETTINGS_MENU = [
  { name: "My page", icon: person, link: "/users" },
  { name: "News", icon: news, link: "#" },
  { name: "Messages", icon: messages, link: "#" },
  { name: "Dashboards", icon: dashboard, link: "#" },
  { name: "Pictures", icon: pictures, link: "#" },
  { name: "separator", link: "#" },
  { name: "Edit profile", icon: edit, link: "#" },
  { name: "Settings", icon: settings, link: "#" },
];

export const LINKS_MENU = [
  { name: "Main page", link: "#" },
  { name: "Main page", link: "#" },
  { name: "Main page", link: "#" },
  { name: "Main page", link: "#" },
];
