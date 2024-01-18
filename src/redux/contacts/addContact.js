import { nanoid } from "nanoid";
import { Notify } from "notiflix";

export const addContact = (state, payload) => {
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
};

