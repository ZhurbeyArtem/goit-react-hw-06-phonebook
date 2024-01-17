import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      const { name, phone } = payload;
      const isExist = state.filter(
        e =>
          e.name.toLowerCase() === name.toLowerCase() ||
          e.number.toLowerCase() === phone.toLowerCase()
      );
      if (isExist.length > 0) {
        Notify.failure(`${name} or ${phone} is already in contacts`);
        return state;
      }

      const newContact = { id: nanoid(), name, number: phone };
      return [...state, newContact];
    },
    removeContact: (state, { payload: id }) => {
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { actions, reducer } = contactsSlice;
