import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Image } from "../image/Image"
import type { IPatientApiResponse } from "./patientsApiSlice"
import { useGetPatientsQuery, usePostPatientMutation } from "./patientsApiSlice"

export const Patients = () => {
  const { data, isError, isLoading, isSuccess } = useGetPatientsQuery(10)
  const [postPatient] = usePostPatientMutation()

  return (
    <div>
      <h2>Current Patients RTX Query</h2>

      <Button variant="primary" onClick={() => postPatient()}>
        Refresh
      </Button>

      {isLoading && <div>Loading...</div>}

      {isError && <div>Something went wrong</div>}

      {isSuccess && (
        <>
          <div className="row">
            {" "}
            <span>Total patients: {data?.total}</span>
            <br></br>
          </div>

          <div className="row row-cols-3 g-3">
            {data?.patients.map(patient => (
              <div
                className="card me-2"
                style={{ width: "18rem" }}
                key={patient.id}
              >
                <div className="card-body">
                  <h5 className="card-title">{patient.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {patient.email}
                  </h6>
                  <p className="card-text">
                    {patient.address}
                    <br></br>
                    {patient.phone}
                    <Image src={patient.images}></Image>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export const PatientsOld = () => {
  const [patients, setPatients] = useState<IPatientApiResponse>()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPatients(data)
        setIsLoading(false)
        setIsSuccess(true)
        setIsError(false)
      })
  }, [refresh])

  return (
    <div>
      <h2>Current Patients Old Style</h2>

      <Button variant="primary" onClick={() => setRefresh(!refresh)}>
        Refresh
      </Button>

      {isLoading && <div>Loading...</div>}

      {isError && <div>Something went wrong</div>}

      {isSuccess && (
        <>
          <div className="row">
            {" "}
            <span>Total patients: {patients?.total}</span>
            <br></br>
          </div>

          <div className="row row-cols-3 g-3">
            {patients?.patients.map(patient => (
              <div
                className="card me-2"
                style={{ width: "18rem" }}
                key={patient.id}
              >
                <div className="card-body">
                  <h5 className="card-title">{patient.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {patient.email}
                  </h6>
                  <p className="card-text">
                    {patient.address}
                    <br></br>
                    {patient.phone}
                    <Image src={patient.images}></Image>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
