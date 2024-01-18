export const removeContact = (state, id) => {
  return state.filter(contact => contact.id !== id);
};
