import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Service {
  id: number;
  title: string;
  img: string;
  description: string;
  other_field: string;
}

export const getServicesFromServer = createAsyncThunk<Service[], string>(
  "services/getServicesFromServer",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data as Service[]; // Assuming the response data is an array of articles
  }
);

export interface ServicesState {
  services: Service[];
}

const initialState: ServicesState = {
  services: [],
};

const slice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getServicesFromServer.fulfilled,
      (state, action: PayloadAction<Service[]>) => {
        state.services = action.payload;
      }
    );
  },
});

export default slice.reducer;
