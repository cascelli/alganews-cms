import {
  createAction,
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { Post, PostService } from "danielbonifacio-sdk";

// Cria a interface para definir o tipo a ser usado no estado inicial
interface PostSliceState {
  paginated?: Post.Paginated;
  fetching: boolean;
  counter: number;
}

// Cria o Estado inicial
const initialState: PostSliceState = {
  fetching: false,
  counter: 0,
  paginated: {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 1,
    content: [],
  },
};

// Cria a Thunk
export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async function (query: Post.Query) {
    const posts = await PostService.getAllPosts(query);
    return posts;
  }
);

export const increment = createAction("post/increment");

// Cria o Reducer
export const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.counter++;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.paginated = action.payload;
    })
    .addMatcher(isPending, (state) => {
      state.fetching = true;
    })
    .addMatcher(isFulfilled, (state) => {
      state.fetching = false;
    })
    .addMatcher(isRejected, (state) => {
      state.fetching = false;
    });
});
