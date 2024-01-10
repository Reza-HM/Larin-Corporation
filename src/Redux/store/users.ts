import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  token: string;
}

export const registerUser = createAsyncThunk<User, User>(
  "users/registerUser",
  async (newUser: User) => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    return data as User;
  }
);

export const loginUser = createAsyncThunk<User | undefined, User>(
  "users/loginUser",
  async (credentials: User) => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    const user = data.find(
      (user: User) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );
    return user as User | undefined;
  }
);

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<User | undefined>) => {
          state.loading = false;
          state.user = action.payload || null;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { setUser, clearError } = authSlice.actions;

export default authSlice.reducer;
