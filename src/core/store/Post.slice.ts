import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostService } from "danielbonifacio-sdk";

interface PostSliceState {
    paginated?: Post.Paginated
}

const initialState: PostSliceState = {
    paginated: {
        page: 0,
        size: 0,
        totalElements: 0,
        totalPages: 1,
        content: []
    }
}

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async function(query: Post.Query) {
        const posts = await PostService.getAllPosts(query);
        return posts;
    }
)

const postSlice = createSlice({
    name: 'post',
    //initialState: {},
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Post.Summary>) {
            state.paginated?.content?.push(action.payload)
        }
    }
});

// Exportando um reducer
export const postReducer = postSlice.reducer;

// Exportando uma action
export const { addPost } = postSlice.actions;
