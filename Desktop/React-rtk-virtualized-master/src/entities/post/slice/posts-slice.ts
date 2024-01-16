import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPost } from "../model/types";

const initialState: IPost[] = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addOne(state, action: PayloadAction<IPost>) {
      const post = action.payload;
      state.push(post);
    },
    loadAll(_, action: PayloadAction<IPost[]>) {
      const posts = action.payload;
      return posts;
    },
    removeOne(state, action: PayloadAction<IPost["id"]>) {
      const id = action.payload;
      state = state.filter((post) => post.id !== id);
    },
  },
});

export const { actions, reducer } = postsSlice;
