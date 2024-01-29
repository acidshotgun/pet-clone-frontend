import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import Button from "../Button/Button";

import createdAtIcon from "../../images/icons/CreatedAt.svg";
import messages from "../../images/icons/messages.svg";
import styles from "./DashboardProfile.module.scss";

const DashboardProfile = ({ description, createdAt }: any) => {
  const isAuth = false;

  return (
    <ComponentLayout description="About community">
      <div className={styles.information}>
        <div className={styles.dashboardDescription}>
          <p className={styles.text}>{description}</p>
          <div className={styles.createdAt}>
            <img src={createdAtIcon} alt="icon"></img>
            <span className={styles.date}>{createdAt}</span>
          </div>
        </div>
        <hr></hr>
        {/* <div className={styles.functional}>
          {isAuth ? (
            <Button
              text="Edit profile"
              className={"white_button"}
              type={"big"}
            />
          ) : (
            <>
              <Button
                text={"Subscribe"}
                className={"white_button"}
                type={"big"}
              />
              <Button icon={messages} className={"grey_button"} type={"big"} />
              <Button text="more" className={"grey_button"} type={"big"} />
            </>
          )}
        </div> */}
      </div>
    </ComponentLayout>
  );
};

export default DashboardProfile;
