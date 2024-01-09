import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  count: number;
  other_field: string;
}

export const getProjectsFromServer = createAsyncThunk<Project[], string>(
  "projects/getProjectsFromServer",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data as Project[]; // Assuming the response data is an array of articles
  }
);

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [],
};

const slice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProjectsFromServer.fulfilled,
      (state, action: PayloadAction<Project[]>) => {
        state.projects = action.payload;
      }
    );
  },
});

export default slice.reducer;
