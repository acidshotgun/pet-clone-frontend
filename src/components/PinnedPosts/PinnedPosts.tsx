import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import { Link } from "react-router-dom";

import styles from "./PinnedPosts.module.scss";

const fakeData = [
  {
    image:
      "https://i.pinimg.com/564x/6f/5c/2d/6f5c2d2fd0d27e7f2b2422e201b13524.jpg",
    title: "Name of the pinned post",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "23 окт. в 22:30",
  },
  {
    image:
      "https://i.pinimg.com/564x/6f/5c/2d/6f5c2d2fd0d27e7f2b2422e201b13524.jpg",
    title: "Name of the pinned post",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "23 окт. в 22:30",
  },
  {
    image:
      "https://i.pinimg.com/564x/6f/5c/2d/6f5c2d2fd0d27e7f2b2422e201b13524.jpg",
    title: "Name of the pinned post",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "23 окт. в 22:30",
  },
];

const PinnedPosts = () => {
  return (
    <ComponentLayout description="Pinned posts">
      <ul>
        {fakeData.map((item, i) => {
          return (
            <li className={styles.wrapper} key={i}>
              <Link to="/" className={styles.postItem}>
                <div className={styles.line}></div>
                <div className={styles.picture}>
                  <img className={styles.img} src={item.image} alt="pic"></img>
                </div>

                <div className={styles.about}>
                  <div className={styles.header}>
                    <span className={styles.title}>{item.title}</span>
                    <div className={styles.point}></div>
                    <span className={styles.time}>{item.createdAt}</span>
                  </div>
                  <p className={styles.descr}>{item.descr}</p>
                </div>

                <div className={styles.dropdown}>
                  <div className={styles.dropdownPoint}></div>
                  <div className={styles.dropdownPoint}></div>
                  <div className={styles.dropdownPoint}></div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </ComponentLayout>
  );
};

export default PinnedPosts;
