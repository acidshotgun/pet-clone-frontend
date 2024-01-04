import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";

import dots from "./icons/dots.svg";
import likes from "./icons/likes.svg";
import comments from "./icons/comments.svg";
import share from "./icons/share.svg";
import eye from "./icons/eye.svg";

import styles from "./Post.module.scss";

interface IPost {
  image?: string;
}

const Post = ({ image }: IPost) => {
  return (
    <ComponentLayout>
      <div className={styles.wrapper}>
        <div className={styles.authorInfo}>
          <div className={styles.leftSide}>
            <div className={styles.avatar}>
              <img
                src="https://i.pinimg.com/564x/27/d1/03/27d1032d285f26f60a7e3881d9d0da4b.jpg"
                alt="avatar"
              ></img>
            </div>
            <div className={styles.info}>
              <span className={styles.name}>@acidshotgun</span>
              <span className={styles.date}>23 окт. в 22:30</span>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src={dots} alt="dots" />
          </div>
        </div>

        <div className={styles.postDescr}>
          <span className={styles.postName}>Заголовок созданного поста</span>
          <span className={styles.postTags}>#sci-fi,#cyberpunk,#web,#art</span>
        </div>
        <div className={styles.postImage}>
          <img src={image} alt="postImage" />
        </div>

        <div className={styles.downMenu}>
          <div className={styles.left}>
            <button className={styles.socialBtn}>
              <img src={likes} alt="icon" />
              <span className={styles.btnText}>23 Likes</span>
            </button>
            <button className={styles.socialBtn}>
              <img src={comments} alt="icon" />
              <span className={styles.btnText}>42 Comments</span>
            </button>
            <button className={styles.socialBtn}>
              <img src={share} alt="icon" />
              <span className={styles.btnText}>Share</span>
            </button>
          </div>
          <div className={styles.right}>
            <div className={styles.viewsIcon}>
              <img src={eye} alt="views" />
            </div>
            <span className={styles.viewsCount}>678</span>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Post;
