import {
  createAction,
  createAsyncThunk,
  createReducer,
  // createSlice, // Removido noi capitulo 10.16
  isFulfilled,
  isPending,
  isRejected,
  //PayloadAction, // Removido noi capitulo 10.16
} from "@reduxjs/toolkit";
import { Post, PostService } from "danielbonifacio-sdk";

interface PostSliceState {
  paginated?: Post.Paginated;
  fetching: boolean;
  counter: number;
}

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

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async function (query: Post.Query) {
    const posts = await PostService.getAllPosts(query);
    return posts;
  }
);

export const increment = createAction("post/increment");

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

/*
const postSlice = createSlice({
  name: "post",
  //initialState: {},
  initialState,
  reducers: {
    // Removido no capitulo 10.16
    // addPost(state, action: PayloadAction<Post.Summary>) {
    //   state.paginated?.content?.push(action.payload);
    },
  },
  extraReducers(builder) {
    // builder
    //   .addCase(fetchPosts.fulfilled, (state, action) => {
    //     state.paginated = action.payload;
    //   })
    //   .addMatcher(isPending, (state) => {
    //     state.fetching = true;
    //   })
    //   .addMatcher(isFulfilled, (state) => {
    //     state.fetching = false;
    //   })
    //   .addMatcher(isRejected, (state) => {
    //     state.fetching = false;
    //   });
  },
});

// Exportando um reducer
// export const postReducer = postSlice.reducer;

// Exportando uma action
// export const { addPost } = postSlice.actions;
*/
