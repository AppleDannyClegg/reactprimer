import { fireEvent, render, screen } from "@testing-library/react"
// import { rest } from "msw"
import { Provider } from "react-redux"
import { store } from "../../app/store"
// import { server } from "../../mocks/server"

import { server } from "../../tests/mocks/node"

import { http, HttpResponse } from "msw"
import { Patients, PatientsOld } from "./Patients"

server.listen()

describe("PatientsOld Component", () => {
  afterEach(() => {
    server.resetHandlers()
  })

  test("renders loading state initially", () => {
    render(
      <Provider store={store}>
        <PatientsOld />
      </Provider>,
    )
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
  })

  test("renders patients data after fetch", async () => {
    render(
      <Provider store={store}>
        <PatientsOld />
      </Provider>,
    )

    expect(await screen.findByText(/Total patients:/i)).toBeInTheDocument()
  })

  test("handles fetch error", async () => {
    server.use(
      http.get("http://localhost:3000/patients", () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )

    render(
      <Provider store={store}>
        <PatientsOld />
      </Provider>,
    )

    expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument()
  })

  test("refresh button works", async () => {
    render(
      <Provider store={store}>
        <PatientsOld />
      </Provider>,
    )

    const refreshButton = screen.getByText(/Refresh/i)
    fireEvent.click(refreshButton)

    expect(await screen.findByText(/Total patients:/i)).toBeInTheDocument()
  })
})

describe("Patients Component", () => {
  test("renders loading state initially", () => {
    render(
      <Provider store={store}>
        <Patients />
      </Provider>,
    )
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
  })

  test("renders patients data after fetch", async () => {
    render(
      <Provider store={store}>
        <Patients />
      </Provider>,
    )

    expect(await screen.findByText(/Total patients:/i)).toBeInTheDocument()
  })

  test("refresh button works", async () => {
    render(
      <Provider store={store}>
        <Patients />
      </Provider>,
    )

    const refreshButton = screen.getByText(/Refresh/i)
    fireEvent.click(refreshButton)

    expect(await screen.findByText(/Total patients:/i)).toBeInTheDocument()
  })

  test("handles fetch error", async () => {
    server.use(
      http.get("http://localhost:3000/patients", () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )

    render(
      <Provider store={store}>
        <Patients />
      </Provider>,
    )

    expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument()
  })
})
