import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // USER LOGIN MUTATION -> USER=> CLIENT SIDE
    loggedIn: builder.mutation({
      query: (data) => ({
        url: `/team/login`,
        method: "POST",
        body: data,
      }),

      // when user loggedin then you set some info on localStorage and redux store
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.access_token,
              user: result?.data?.data,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.access_token,
              user: result?.data?.data,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
    }),

    // USER REGISTER MUTATION -> USER => CLIENT SIDE
    userRegister: builder.mutation({
      query: (data) => ({
        url: `/team`,
        method: "POST",
        body: data,
      }),

      // when user loggedin then you set some info on localStorage and redux store
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.access_token,
              user: result?.data?.data,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.access_token,
              user: result?.data?.data,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useLoggedInMutation, useUserRegisterMutation } = authApi;
