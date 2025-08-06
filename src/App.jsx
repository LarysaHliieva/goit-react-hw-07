import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import { fetchContacts } from "./redux/contactsOps";

import {
  selectLoading,
  // selectError,
} from "./redux/contactSlice";

import styles from "./App.module.css";

import "./App.css";

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
