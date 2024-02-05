import LogoImage from "../LogoImage/LogoImage";
import Button from "../Button/Button";

import styles from "./DashboardHeader.module.scss";

interface IDashboardHeader {
  backgroundImage?: string | undefined;
  dashboardName?: string;
  avatarUrl?: string | undefined;
  link?: string | undefined;
}

const DashboardHeader = ({
  backgroundImage,
  avatarUrl,
  dashboardName,
  link,
}: IDashboardHeader) => {
  console.log(backgroundImage);
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage}>
        {backgroundImage?.length === undefined ? (
          <div className={styles.no_image}></div>
        ) : (
          <img src={backgroundImage} alt="bg"></img>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.dasboardAvatar}>
          <LogoImage image={avatarUrl} />
        </div>
        <div className={styles.dashboardInfo}>
          <p className={styles.dashboardName}>{dashboardName}</p>
          <span className={styles.link}>{link}</span>
        </div>
        <Button text="join" className={"white_button"} type={"big"} />
      </div>
    </div>
  );
};

export default DashboardHeader;
