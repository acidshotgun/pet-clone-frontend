import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";

import dots from "./icons/dots.svg";
import likes from "./icons/likes.svg";
import comments from "./icons/comments.svg";
import share from "./icons/share.svg";
import eye from "./icons/eye.svg";

import styles from "./Post.module.scss";

// interface IPost {
//   author: string;
//   comments: string[];
//   createdAt: string
//   image?: string;
// }

const Post = ({ postData, dashboardName, logoUrl }: any) => {
  return (
    <ComponentLayout>
      <div className={styles.wrapper}>
        <div className={styles.authorInfo}>
          <div className={styles.leftSide}>
            <div className={styles.avatar}>
              <img src={logoUrl} alt="avatar"></img>
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{dashboardName}</span>
              <span className={styles.date}>{postData.createdAt}</span>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src={dots} alt="dots" />
          </div>
        </div>

        <div className={styles.postDescr}>
          <span className={styles.postName}>{postData.title}</span>
          <span className={styles.postTags}>{postData.tags}</span>
        </div>
        <div className={styles.postImage}>
          {postData.imageUrl ? (
            <img src={postData.imageUrl} alt="postImage" />
          ) : null}
        </div>

        <div className={styles.downMenu}>
          <div className={styles.left}>
            <button className={styles.socialBtn}>
              <img src={likes} alt="icon" />
              <span className={styles.btnText}>{postData.likesCounter}</span>
            </button>
            <button className={styles.socialBtn}>
              <img src={comments} alt="icon" />
              <span className={styles.btnText}>{postData.comments.length}</span>
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
            <span className={styles.viewsCount}>{postData.viewCounter}</span>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Post;
