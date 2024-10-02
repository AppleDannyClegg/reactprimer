// mocks/handlers.js
import { http, HttpResponse } from "msw"
import { IPatientApiResponse } from "../../interfaces/patientApiResponse"

export const unhappyPathHandlers = [
  http.get("http://localhost:3000/patients", () => {
    return HttpResponse.error()
  }),
]

export const handlers = [
  http.get("http://localhost:3000/patients", () => {
    return HttpResponse.json<IPatientApiResponse>({
      total: 2,
      skip: 0,
      limit: 10,

      patients: [
        {
          id: "1",
          name: "John Doe",
          age: 30,
          address: "123 Main St",
          phone: "555-555-5555",
          email: "    ",
          images: ["http://example.com/xray1.jpg"],
        },
        {
          id: "2",
          name: "Jane Doe",
          age: 40,
          address: "456 Elm St",
          phone: "555-555-5555",
          email: "",
          images: ["http://example.com/xray2.jpg"],
        },
      ],
    })
  }),
]
