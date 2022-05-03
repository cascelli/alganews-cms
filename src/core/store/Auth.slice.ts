import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserService } from "danielbonifacio-sdk";
import AuthService from "../../auth/Authorization.service";

type PA<T> = PayloadAction<T>;

interface AuthState {
  user: User.Detailed | null;
  fetching: boolean;
}

const initialState: AuthState = {
  user: null,
  fetching: false,
};

// Cria uma Thunk
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (userId: number, { rejectWithValue, dispatch }) => {
    try {
      const user = await UserService.getDetailedUser(userId);
      if (user.role !== "EDITOR") {
        window.alert("Voce nao tem acesso a este sistema ");
        AuthService.imperativelySendToLogout();
        return;
      }
      dispatch(storeUser(user));
    } catch (err) {
      return rejectWithValue({ ...err });
    }
  }
);

const authSlice = createSlice({
  initialState,
  name: "auth",
  // Define as ações do slice
  reducers: {
    storeUser(state, action: PA<User.Detailed>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

// Exporta as ações do authSlice
export const { storeUser, clearUser } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
