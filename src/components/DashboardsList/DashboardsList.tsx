import { Link } from "react-router-dom";
import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";

import styles from "./Dashboard.module.scss";

const fakeBoard = [
  {
    name: "Имя сообщества",
    image:
      "https://i.pinimg.com/564x/78/7f/56/787f56daf00fc04d0b75c2d7c6f4422f.jpg",
    boardId: "@comm_name",
    descr: "Some descr ;))",
  },
  {
    name: "Имя сообщества",
    image:
      "https://i.pinimg.com/564x/78/7f/56/787f56daf00fc04d0b75c2d7c6f4422f.jpg",
    boardId: "@comm_name",
    descr: "Some descr ;))",
  },
  {
    name: "Имя сообщества",
    image:
      "https://i.pinimg.com/564x/78/7f/56/787f56daf00fc04d0b75c2d7c6f4422f.jpg",
    boardId: "@comm_name",
    descr: "Some descr ;))",
  },
  {
    name: "Имя сообщества",
    image:
      "https://i.pinimg.com/564x/78/7f/56/787f56daf00fc04d0b75c2d7c6f4422f.jpg",
    boardId: "@comm_name",
    descr: "Some descr ;))",
  },
];

const Dashboards = () => {
  // Ограничивает массив 4 элементами
  const limitedBoards = fakeBoard.slice(0, 4);

  return (
    <ComponentLayout description="Dashboards">
      <ul className={styles.list}>
        {limitedBoards.map((item, i) => {
          return (
            <li className={styles.dashboard} key={i}>
              <Link to="/" className={styles.link}>
                <div className={styles.image}>
                  <img src={item.image} alt="pic"></img>
                </div>
                <div className={styles.main}>
                  <div className={styles.dashboardInfo}>
                    <span className={styles.name}>{item.name}</span>
                    <div className={styles.point}></div>
                    <span className={styles.id}>{item.boardId}</span>
                  </div>
                  <p className={styles.descr}>{item.descr}</p>
                </div>
              </Link>
            </li>
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

export default Dashboards;
