import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import ContactsListItem from "./ContactsListItem/ContactsListItem";

import styles from "./Contacts.module.scss";

const Contacts = ({ admins }: any) => {
  return (
    <ComponentLayout description="Contacts">
      <ul className={styles.wrapper}>
        {admins
          ? admins.map((item: any, i: any) => {
              return <ContactsListItem key={i} data={item} />;
            })
          : null}
      </ul>
    </ComponentLayout>
  );
};

export default Contacts;
