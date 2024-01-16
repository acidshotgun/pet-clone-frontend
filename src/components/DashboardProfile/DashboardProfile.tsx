import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import Button from "../Button/Button";

import createdAt from "../../images/icons/CreatedAt.svg";
import messages from "../../images/icons/messages.svg";
import styles from "./DashboardProfile.module.scss";

const DashboardProfile = () => {
  const isAuth = false;

  return (
    <ComponentLayout description="About community">
      <div className={styles.information}>
        <div className={styles.dashboardDescription}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.createdAt}>
            <img src={createdAt} alt="icon"></img>
            <span className={styles.date}>Created Dec 12, 2022</span>
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
