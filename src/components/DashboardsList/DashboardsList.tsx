import { Link } from "react-router-dom";
import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import DashboardsListItem from "../DashboardsListItem/DashboardsListItem";

import styles from "./Dashboard.module.scss";

const DashboardsList = ({ data }: any) => {
  // Ограничивает массив 4 элементами
  const limitedBoards = data.slice(0, 4);

  return (
    <ComponentLayout description="Dashboards">
      <ul className={styles.list}>
        {limitedBoards.map((item: any, i: any) => {
          return (
            <DashboardsListItem
              key={i}
              name={item.name}
              image={item.image}
              boardId={item.boardId}
              descr={item.descr}
              boardLink={item.boardLink}
            />
          );
        })}
      </ul>
      <div className={styles.footer}>
        <Link to="/user/dashboards">
          <span className={styles.more}>See all 201 dashboards</span>
          <div className={styles.line}></div>
        </Link>
      </div>
    </ComponentLayout>
  );
};

export default DashboardsList;
