import ContactsForm from './form/ContactsForm';
import Filter from './filters/Filter';
import ContactList from './contacts/ContactList';

import s from 'index.module.css';

export const App = () => {
  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
