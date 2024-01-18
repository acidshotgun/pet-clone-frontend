import styles from "./DiscussionListItem.module.scss";

interface IDiscussionListItem {
  name: string;
  messages: string;
  date: string;
}

const DiscussionListItem = ({ name, messages, date }: IDiscussionListItem) => {
  return (
    <li className={styles.wrapper}>
      <span className={styles.name}>{name}</span>
      <div className={styles.info}>
        <span className={styles.messages}>{messages}</span>
        <div className={styles.dot}></div>
        <span className={styles.date}>{date}</span>
      </div>
    </li>
  );
};

export default DiscussionListItem;
