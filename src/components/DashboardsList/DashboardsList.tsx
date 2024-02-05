import { Link } from "react-router-dom";
import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import DashboardsListItem from "./DashboardsListItem/DashboardsListItem";

import styles from "./Dashboard.module.scss";

const DashboardsList = ({ data }: any) => {
  // Ограничивает массив 4 элементами
  // const limitedBoards = data.slice(0, 4);

  console.log(data);

  return (
    <ComponentLayout description="Dashboards">
      <ul className={styles.list}>
        {data &&
          data.map((item: any, i: any) => {
            return (
              <DashboardsListItem
                key={i}
                name={item.dashboardName.slice(0, 15)}
                image={item.logoUrl}
                boardId={"@some_id"}
                descr={item.description.slice(0, 30)}
                boardLink={item._id}
              />
            );
          })}
      </ul>
      <div className={styles.footer}>
        <Link to="/user/dashboards">
          <span className={styles.more}>See all {data?.length} dashboards</span>
          <div className={styles.line}></div>
        </Link>
      </div>
    </ComponentLayout>
  );
};

export default DashboardsList;
