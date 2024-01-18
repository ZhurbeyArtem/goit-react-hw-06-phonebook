import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as contactAction } from '../../redux/contacts/contacts.slice';

import s from './style.module.css';

const ContactsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = formData;
    dispatch(contactAction.addContact({ name, phone }));
    setFormData({ name: '', phone: '' });
    e.target.reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.formLabel}>
          Name
          <input
            type="text"
            name="name"
            required
            onChange={handleInputChange}
            value={formData.name}
          />
        </label>
        <label className={s.formLabel}>
          Number
          <input
            type="tel"
            name="phone"
            required
            onChange={handleInputChange}
            value={formData.phone}
          />
        </label>

        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
