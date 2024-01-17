import { useDispatch, useSelector } from 'react-redux';

import ContactsForm from './form/ContactsForm';
import Filter from './filters/Filter';
import ContactList from './contacts/ContactList';
import { actions as contactAction } from '../redux/contacts/contacts.slice';
import { actions as filterAction } from '../redux/filter/filter.slice';
import s from 'index.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addUser = (name, phone) => {
    dispatch(contactAction.addContact({ name, phone }));
  };

  const removeUser = id => {
    dispatch(contactAction.removeContact(id));
  };

  const setFilter = val => {
    dispatch(filterAction.changeFilter(val));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactsForm addUser={addUser} />

      <h2>Contacts</h2>
      <Filter filter={filter} filterFunc={setFilter} />
      <ContactList users={filteredContacts()} removeUser={removeUser} />
    </div>
  );
};
