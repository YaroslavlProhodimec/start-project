import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@shared/config";

import { IProductDto, IProductsDto } from "./types";

const postsApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IProductsDto, string>({
      query(itemsToSkip) {
        return `?limit=5&skip=${itemsToSkip}`;
      },
    }),
    getPostById: builder.query<IProductDto, string>({
      query(productId) {
        return `/${productId}`;
      },
    }),
  }),
});

const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;

export { postsApi, useGetPostsQuery, useGetPostByIdQuery };
