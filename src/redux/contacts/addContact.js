import { nanoid } from 'nanoid';

export const addContact = (state, payload) => {
  const { name, phone } = payload;
  const newContact = { id: nanoid(), name, number: phone };
  return [...state, newContact];
};
