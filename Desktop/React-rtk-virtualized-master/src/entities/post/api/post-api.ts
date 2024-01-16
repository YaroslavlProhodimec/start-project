
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../../shared/config";
import { PostType } from "../model/type";



export const postAPI = createApi({
    reducerPath: 'PostAPI',
    baseQuery: fetchBaseQuery(
        {baseUrl: API_URL}),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<PostType[], string>({
            query(itemsToSkip) {
                return `?limit=5&skip=${itemsToSkip}`;
            },
        }),
        fetchPostById: builder.query<PostType, string>({
            query(productId) {
                return `/${productId}`;
            },
        }),
    }),
})
const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postAPI;

export { useFetchAllPostsQuery, useFetchPostByIdQuery };
