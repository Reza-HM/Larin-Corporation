import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  subject: string;
  email: string;
  body: string;
}

export const getContactsFromServer = createAsyncThunk<Contact[], string>(
  "contacts/getContactsFromServer",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data as Contact[]; // Assuming the response data is an array of articles
  }
);

export const addContactToServer = createAsyncThunk<Contact, Contact>(
  "contacts/addContactToServer",
  async (newContact: Contact) => {
    const response = await fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    });
    const data = await response.json();
    return data as Contact; // Assuming the response data is the created contact object
  }
);

export interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getContactsFromServer.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.contacts = action.payload;
        }
      )
      .addCase(
        addContactToServer.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.contacts.push(action.payload);
        }
      );
  },
});

export default slice.reducer;
