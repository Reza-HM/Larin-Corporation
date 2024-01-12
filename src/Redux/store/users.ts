import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
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

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    localStorage.setItem("token", newUser.token);
    return data as User;
  }
);

// authSliceFile.ts
export const loginUser = createAsyncThunk<
  User | undefined,
  { username: string; password: string }
>(
  "users/loginUser",
  async (credentials: { username: string; password: string }) => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    const user = data.find(
      (user: User) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    if (user) {
      const newToken = crypto.randomUUID();

      await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: newToken }),
      });

      // Update the user's token in the local storage
      localStorage.setItem("token", newToken);

      // Return the user with the updated token
      return { ...user, token: newToken } as User;
    }

    return undefined;
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
  name: "users",
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
