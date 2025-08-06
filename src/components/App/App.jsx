import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import { fetchContacts } from "../../redux/contactsOps";

import { selectLoading } from "../../redux/contactSlice";

import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <CircularProgress color="success" />}
      <ContactList />
    </div>
  );
}

export default App;
