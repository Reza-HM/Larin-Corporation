import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Article {
  id: number;
  title: string;
  img: string;
  description: string;
  body: string;
  author: string;
  date_published: string;
}

export const getArticlesFromServer = createAsyncThunk<Article[], string>(
  "articles/getArticlesFromServer",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data as Article[]; // Assuming the response data is an array of articles
  }
);

interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [],
};

const slice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getArticlesFromServer.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.articles = action.payload;
      }
    );
  },
});

export default slice.reducer;
