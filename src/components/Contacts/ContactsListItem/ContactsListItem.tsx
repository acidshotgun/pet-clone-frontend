import { Link } from "react-router-dom";
import ListItemWrapper from "../../ListItemWrapper/ListItemWrapper";

import styles from "./ContactsListItem.module.scss";

const ContactsListItem = ({ data }: any) => {
  return (
    <ListItemWrapper>
      <Link to={"/"}>
        <div className={styles.contacts_wrapper}>
          <div className={styles.avatar}>
            <img src={data.logo} alt="contact-avatar" />
          </div>
          <div className={styles.info}>
            <span className={styles.name}>{data.name}</span>
            <span className={styles.role}>{data.role}</span>
          </div>
        </div>
      </Link>
    </ListItemWrapper>
  );
};

export default ContactsListItem;
