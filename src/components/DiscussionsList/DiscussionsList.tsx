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
    </ComponentLayout>
  );
};

export default DiscussionsList;
