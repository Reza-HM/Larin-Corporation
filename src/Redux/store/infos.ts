import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Infos {
  id?: number;
  company_id?: number;
  company_name?: string;
  about?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export const getInfosFromServer = createAsyncThunk<Infos, string>(
  "infos/getInfosFromServer",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data as Infos; // Assuming the response data is an array of articles
  }
);

interface InfosState {
  infos: Infos;
}

const initialState: InfosState = {
  infos: {},
};

const slice = createSlice({
  name: "infos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getInfosFromServer.fulfilled,
      (state, action: PayloadAction<Infos>) => {
        state.infos = action.payload;
      }
    );
  },
});

export default slice.reducer;
