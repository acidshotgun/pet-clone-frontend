import { Link } from "react-router-dom";
import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import DiscussionListItem from "./DiscussionListItem/DiscussionListItem";

import styles from "./DiscussionsList.module.scss";

const DiscussionsList = ({ discussionsData }: any) => {
  return (
    <ComponentLayout description="Discussions">
      <ul className={styles.wrapper}>
        {discussionsData.map((item: any, i: any) => {
          const { name, messages, date } = item;

          return (
            <DiscussionListItem
              key={i}
              name={name}
              messages={messages}
              date={date}
            />
          );
        })}
      </ul>
      <div className={styles.footer}>
        <Link to="/dashboard/id123123/discussions">
          <span className={styles.more}>See all 201 dashboards</span>
          <div className={styles.line}></div>
        </Link>
      </div>
    </ComponentLayout>
  );
};

export default DiscussionsList;
