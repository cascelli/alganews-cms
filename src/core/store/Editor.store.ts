import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { User, UserService } from "danielbonifacio-sdk";

// Cria a Thunk
export const fetchAllEditors = createAsyncThunk(
  "editor/fetchAllEditors",
  async function () {
    return UserService.getAllEditors();
  }
);

// Cria a interface para definir o tipo a ser usado no estado inicial
interface EditorStoreState {
  fetching: boolean;
  editorsList: User.EditorSummary[];
}

// Cria o Estado inicial
const initialState: EditorStoreState = {
  editorsList: [],
  fetching: false,
};

// Cria o Reducer
export const editorReducer = createReducer(initialState, (builder) => {
  const pending = isPending(fetchAllEditors);
  const rejected = isRejected(fetchAllEditors);
  const fulfilled = isFulfilled(fetchAllEditors);

  builder
    .addCase(fetchAllEditors.fulfilled, (state, action) => {
      state.editorsList = action.payload;
    })
    .addMatcher(pending, (state) => {
      state.fetching = true;
    })
    .addMatcher(rejected, (state) => {
      state.fetching = false;
    })
    .addMatcher(fulfilled, (state) => {
      state.fetching = false;
    });
});
