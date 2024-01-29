import { Link } from "react-router-dom";
import ListItemWrapper from "../../ListItemWrapper/ListItemWrapper";

import styles from "./ContactsListItem.module.scss";

const ContactsListItem = ({ data }: any) => {
  const { description, user } = data;
  const { avatarUrl, nickName, _id } = user;

  return (
    <ListItemWrapper>
      <Link to={`/users/${_id}`}>
        <div className={styles.contacts_wrapper}>
          <div className={styles.avatar}>
            <img src={avatarUrl} alt="contact-avatar" />
          </div>
          <div className={styles.info}>
            <span className={styles.name}>{nickName}</span>
            <span className={styles.role}>{description}</span>
          </div>
        </div>
      </Link>
    </ListItemWrapper>
  );
};

export default ContactsListItem;
