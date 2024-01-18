import { createSlice } from '@reduxjs/toolkit';
import { addContact } from './addContact';
import { removeContact } from './removeContact';
import { getContacts } from './getContacts';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContacts: state => getContacts(state),
    addContact: (state, { payload }) => addContact(state, payload),
    removeContact: (state, { payload }) => removeContact(state, payload),
  },
});

export const { actions, reducer } = contactsSlice;
