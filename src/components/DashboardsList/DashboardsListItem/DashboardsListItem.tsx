import { Link } from "react-router-dom";

import styles from "./DashboardsListItem.module.scss";

interface IDashboardsListItem {
  name: string;
  image: string;
  boardId: string;
  boardLink: string;
  descr: string;
}

const DashboardsListItem = ({
  name,
  image,
  boardId,
  boardLink,
  descr,
}: IDashboardsListItem) => {
  return (
    <li className={styles.dashboard}>
      <Link to={`/dashboards/${boardLink}`} className={styles.link}>
        <div className={styles.image}>
          <img src={image} alt="pic"></img>
        </div>
        <div className={styles.main}>
          <div className={styles.dashboardInfo}>
            <span className={styles.name}>{name}</span>
            <div className={styles.point}></div>
            <span className={styles.id}>{boardId}</span>
          </div>
          <p className={styles.descr}>{descr}</p>
        </div>
      </Link>
    </li>
  );
};

export default DashboardsListItem;
