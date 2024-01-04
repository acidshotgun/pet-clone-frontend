import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import Button from "../Button/Button";

import New from "./icons/New.svg";
import Top from "./icons/Top.svg";
import Hot from "./icons/Hot.svg";
import Settings from "./icons/Settings.svg";

import styles from "./SortPosts.module.scss";

const SortPosts = () => {
  return (
    <ComponentLayout>
      <div className={styles.wrapper}>
        <div className={styles.leftGroup}>
          <Button icon={New} text={"New"} type="greyButtonIcon" />
          <Button icon={Top} text="Top" type="greyButtonIcon" />
          <Button icon={Hot} text="Hot" type="greyButtonIcon" />
        </div>

        <div className={styles.rightGroup}>
          <Button icon={Settings} type="greyButtonIcon" />
        </div>
      </div>
    </ComponentLayout>
  );
};

export default SortPosts;
