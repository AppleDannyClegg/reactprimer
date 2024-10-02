// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPatientApiResponse } from "../../interfaces/patientApiResponse"
import { IPatient } from "../../interfaces/patient"



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
    postPatient: build.mutation<void, Partial<void>>({
      query: patient => ({
        url: `patients`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Patients" }],
    }),
  }),
})

export const {
  useGetPatientsQuery,
  useGetPatientQuery,
  usePostPatientMutation,
} = patientApiSlice
