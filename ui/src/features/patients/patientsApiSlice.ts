// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface IPatient {
  id: string
  name: string
  age: number
  address: string
  phone: string
  email: string
  images: string[]
}

export interface IPatientApiResponse {
  patients: IPatient[]
  total: number
  skip: number
  limit: number
}

// Define a service using a base URL and expected endpoints
export const patientApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  reducerPath: "patientApi",
  tagTypes: ["Patients"],
  endpoints: build => ({
    getPatients: build.query<IPatientApiResponse, number>({
      query: (limit = 10) => `patients`,

      providesTags: (result, error, id) => [{ type: "Patients", id }],
    }),
    getPatient: build.query<IPatient, number>({
      query: id => `patient/${id}`,
      providesTags: (result, error, id) => [{ type: "Patients", id }],
    }),
  }),
})

export const { useGetPatientsQuery, useGetPatientQuery } = patientApiSlice
