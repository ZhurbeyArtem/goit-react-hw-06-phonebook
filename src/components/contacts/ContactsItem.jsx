import React from 'react';
import { useDispatch } from 'react-redux';

import s from './style.module.css';
import { actions as contactAction } from '../../redux/contacts/contacts.slice';

const ContactsItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name} {phone}
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(contactAction.removeContact(id))}
      >
        remove
      </button>
    </li>
  );
};

export default ContactsItem;
