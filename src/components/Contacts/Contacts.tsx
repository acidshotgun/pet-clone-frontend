import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import ContactsListItem from "./ContactsListItem/ContactsListItem";

import styles from "./Contacts.module.scss";

const Contacts = ({ contactsData }: any) => {
  return (
    <ComponentLayout description="Contacts">
      <ul className={styles.wrapper}>
        {contactsData.map((item: any, i: any) => {
          return <ContactsListItem key={i} />;
        })}
      </ul>
    </ComponentLayout>
  );
};

export default Contacts;
