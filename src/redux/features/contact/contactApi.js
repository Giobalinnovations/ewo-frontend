import { apiSlice } from '../../api/apiSlice';

export const contactApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    submitContact: builder.mutation({
      query: data => ({
        url: 'api/contact/submit',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSubmitContactMutation } = contactApi;
