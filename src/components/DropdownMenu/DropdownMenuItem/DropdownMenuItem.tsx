import { Link } from "react-router-dom";

import styles from "./DropdownMenuItem.module.scss";

const DropdownMenuItem = ({ name, icon, route, link }: any) => {
  return (
    <li className={styles.listItem}>
      <Link to={`${route}/${link}`}>
        {icon && <img src={icon} alt="icon" className={styles.icon}></img>}
        <span className={styles.link}>{name}</span>
      </Link>
    </li>
  );
};

export default DropdownMenuItem;
