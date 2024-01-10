import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Service {
  id: number;
  title: string;
  img: string;
  description: string;
  other_field: string;
}

export const getServicesFromServer = createAsyncThunk<Service[], string>(
  "services/getServices",
  async (apiUrl: string) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  }
);
export interface ServicesState {
  services: Service[];
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

const initialState: ServicesState = {
  services: [],
  loading: "idle",
  error: null,
};

const slice = createSlice({
  name: "services",
  initialState,
  reducers: {}, // other synchronous reducers if any
  extraReducers: (builder) => {
    builder.addCase(getServicesFromServer.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(
      getServicesFromServer.fulfilled,
      (state, action: PayloadAction<Service[]>) => {
        state.loading = "fulfilled";
        state.services = action.payload;
      }
    );
    builder.addCase(getServicesFromServer.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error.message ?? "An error occurred";
    });
  },
});

export default slice.reducer;
