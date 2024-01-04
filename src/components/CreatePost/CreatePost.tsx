import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import Button from "../Button/Button";

import iconImg from "../../images/icons/createPost/postImage.svg";

import styles from "./CreatePost.module.scss";

const CreatePost = () => {
  return (
    <ComponentLayout>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img
            src="https://i.pinimg.com/564x/27/d1/03/27d1032d285f26f60a7e3881d9d0da4b.jpg"
            alt="ava"
          ></img>
        </div>
        <input className={styles.input} placeholder="What's new?"></input>
        <Button icon={iconImg} type="greyButtonIcon" />
      </div>
    </ComponentLayout>
  );
};

export default CreatePost;
