import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Question {
  id: number;
  question: string;
  answer: string;
}

export const getQuestionsFromServer = createAsyncThunk<Question[], string>(
  "questions/getQuestionsFromServer",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data as Question[]; // Assuming the response data is an array of articles
  }
);

interface QuestionsState {
  questions: Question[];
}

const initialState: QuestionsState = {
  questions: [],
};

const slice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getQuestionsFromServer.fulfilled,
      (state, action: PayloadAction<Question[]>) => {
        state.questions = action.payload;
      }
    );
  },
});

export default slice.reducer;
