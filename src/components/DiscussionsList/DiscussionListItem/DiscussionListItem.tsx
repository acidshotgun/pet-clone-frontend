import { Link } from "react-router-dom";
import ListItemWrapper from "../../ListItemWrapper/ListItemWrapper";

import styles from "./DiscussionListItem.module.scss";

interface IDiscussionListItem {
  name: string;
  messages: string;
  date: string;
}

const DiscussionListItem = ({ name, messages, date }: IDiscussionListItem) => {
  return (
    <ListItemWrapper>
      <Link to="/dashboard/id123123/discussion/id2134">
        <div className={styles.container}>
          <span className={styles.name}>{name}</span>
          <div className={styles.info}>
            <span className={styles.messages}>{messages}</span>
            <div className={styles.dot}></div>
            <span className={styles.date}>{date}</span>
          </div>
        </div>
      </Link>
    </ListItemWrapper>
  );
};

export default DiscussionListItem;
