import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      return [...state.filter(contact => contact.id !== action.payload)];
    },
  },
});
export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;