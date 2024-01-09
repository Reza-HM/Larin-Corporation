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

export const fetchInfos = createAsyncThunk<Infos, string>(
  "infos/fetchInfos",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data as Infos;
  }
);

export interface InfosState {
  infos: Infos | null;
  loading: boolean;
  error: string | null;
}

const initialState: InfosState = {
  infos: null,
  loading: false,
  error: null,
};

const infosSlice = createSlice({
  name: "infos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInfos.fulfilled, (state, action: PayloadAction<Infos>) => {
        state.loading = false;
        state.infos = action.payload;
      })
      .addCase(fetchInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default infosSlice.reducer;
