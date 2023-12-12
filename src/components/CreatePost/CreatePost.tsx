import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import Button from "../Button/Button";

import icon_image from "../../images/icons/icon_image.svg";

import styles from "./CreatePost.module.scss";

const CreatePost = () => {
  return (
    <ComponentLayout>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img
            src="https://img0.liveinternet.ru/images/attach/c/3/83/478/83478422_1.gif"
            alt="ava"
          ></img>
        </div>
        <input placeholder="What's new?"></input>
      </div>
    </ComponentLayout>
  );
};

export default CreatePost;
