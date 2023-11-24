import inst from "../../images/icons/socials/inst.svg";
import site from "../../images/icons/socials/site.svg";

import styles from "./UserProfile.module.scss";

interface IUserProfile {
  backgroundImage: string | undefined;
  nickName: string;
  avatarUrl: string | undefined;
  descr: string | undefined;
}

const UserProfile = ({
  backgroundImage,
  nickName,
  avatarUrl,
  descr,
}: IUserProfile) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgrounImage}>
        <img src={backgroundImage} alt="#"></img>
      </div>
      <div className={styles.information}>
        <div className={styles.userHeader}>
          <img className={styles.userAvatar} src={avatarUrl} alt="#"></img>
          <span className={styles.userName}>@{nickName}</span>
        </div>

        <div className={styles.about}>
          <div className={styles.subs}></div>
          <hr />
          <div className={styles.userDescr}>
            <p>{descr}</p>
          </div>
          <hr />
          <ul className={styles.socials}>
            <li>
              <img src={inst} alt="inst"></img>
              <a href="#">acidshotgun</a>
            </li>
            <li>
              <img src={site} alt="site"></img>
              <a href="#">https://vk.com/serega_pirat</a>
            </li>
          </ul>
          <hr />
          <div className={styles.bio}>
            <div className={styles.country}>
              <span>Country</span>
            </div>
            <div className={styles.city}>
              <span>City</span>
            </div>
            <div className={styles.language}>
              <span>language</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
