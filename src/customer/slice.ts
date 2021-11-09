import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Customer } from "./entity";

const api_id = '9a4e3d74e729447e93068d093e790fd3'

export const customerSlice = createApi({
  reducerPath: 'customer',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://crudcrud.com/api/${api_id}`,
    /*prepareHeaders(headers) {
      headers.set('x-api-key', 'api-key-here');
      return headers
    }*/
  }),
  endpoints: (builder) => ({
    fetchCustomers: (builder.query<Customer[], void>({
      query: () => ({url: `/customers`})
    })),
    fetchCustomerById: (builder.query<Customer, string>({
      query: (id) => ({url: `/customers/${id}`})
    })),
  })
})

export const {
  useFetchCustomersQuery,
  useFetchCustomerByIdQuery
} = customerSlice
