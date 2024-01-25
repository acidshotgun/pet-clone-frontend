import ComponentLayout from "../Layout/ComponentLayout/ComponentLayout";
import ContactsListItem from "./ContactsListItem/ContactsListItem";

import styles from "./Contacts.module.scss";

const contactsData = [
  {
    logo: "https://i.pinimg.com/564x/ed/b7/67/edb76737c1ccf8ac773a0e531f1545ee.jpg",
    name: "@acidshotgun",
    role: "Community creator",
  },
  {
    logo: "https://i.pinimg.com/564x/58/02/ee/5802eef921f498e1d4758572a3029b05.jpg",
    name: "@dim_dimich",
    role: "Administrator",
  },
  {
    logo: "https://i.pinimg.com/564x/51/16/28/51162843b8ade2b768d70fdb362d964d.jpg",
    name: "@ubludok",
    role: "Moderator",
  },
  {
    logo: "https://i.pinimg.com/564x/74/8f/14/748f14a6cbd58bd4e045f61ac4b20a9a.jpg",
    name: "@pocan_pocan",
    role: "Moderator",
  },
];

const Contacts = () => {
  return (
    <ComponentLayout description="Contacts">
      <ul className={styles.wrapper}>
        {contactsData.map((item: any, i: any) => {
          return <ContactsListItem key={i} data={item} />;
        })}
      </ul>
    </ComponentLayout>
  );
};

export default Contacts;
