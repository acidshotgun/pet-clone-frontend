import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
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
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage}>
        <img src={backgroundImage} alt="bg"></img>
      </div>
      <div className={styles.info}>
        <LogoImage image={avatarUrl} />
        <p className={styles.dashboardName}>{dashboardName}</p>
        <span className={styles.link}>{link}</span>
        <Button text="join" className={"white_button"} type={"big"} />
      </div>
    </div>
  );
};

export default DashboardHeader;
