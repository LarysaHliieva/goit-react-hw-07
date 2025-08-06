import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/contactSlice";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((item) => (
        <Contact key={item.id} className={styles.contact} {...item} />
      ))}
    </ul>
  );
};

export default ContactList;
