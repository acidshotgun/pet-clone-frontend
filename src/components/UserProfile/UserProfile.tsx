import Button from "../Button/Button";
import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";

import inst from "../../images/icons/socials/inst.svg";
import site from "../../images/icons/socials/site.svg";
import messages from "../../images/icons/messages.svg";

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
  const isAuth = false;

  return (
    <>
      <div className={styles.backgrounImage}>
        <img src={backgroundImage} alt="#"></img>
      </div>
      <ComponentLayout>
        <div className={styles.information}>
          <div className={styles.userHeader}>
            <img className={styles.userAvatar} src={avatarUrl} alt="#"></img>
            <span className={styles.userName}>@{nickName}</span>
          </div>
          <div className={styles.subs}>
            <span className={styles.subsItem}>1000 Subscribers</span>
            <span className={styles.subsItem}>200 Subscriptions</span>
          </div>

          <div className={styles.about}>
            <hr />
            <div className={styles.functional}>
              {isAuth ? (
                <Button
                  text="Edit profile"
                  className={"white_button"}
                  size={"big"}
                />
              ) : (
                <>
                  <Button
                    text={"Subscribe"}
                    className={"white_button"}
                    size={"big"}
                  />
                  <Button
                    icon={messages}
                    className={"grey_button"}
                    size={"big"}
                  />
                  <Button text="more" className={"grey_button"} size={"big"} />
                </>
              )}
            </div>

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
              <div className={styles.bioElement}>
                <span className={styles.name}>Country</span>
                <div className={styles.point}></div>
                <span className={styles.value}>England</span>
              </div>
              <div className={styles.bioElement}>
                <span className={styles.name}>City</span>
                <div className={styles.point}></div>
                <span className={styles.value}>London</span>
              </div>
              <div className={styles.bioElement}>
                <span className={styles.name}>Language</span>
                <div className={styles.point}></div>
                <span className={styles.value}>English</span>
              </div>
            </div>
          </div>
        </div>
      </ComponentLayout>
    </>
  );
};

export default UserProfile;
