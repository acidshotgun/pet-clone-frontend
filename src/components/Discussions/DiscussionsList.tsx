import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";

import styles from "./DiscussionsList.module.scss";

const DiscussionsList = () => {
  return (
    <ComponentLayout description="Discussions">
      <div className={styles.wrapper}></div>
    </ComponentLayout>
  );
};

export default DiscussionsList;
