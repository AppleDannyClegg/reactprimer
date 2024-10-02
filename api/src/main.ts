import cors from 'cors'
import express, { Request, Response } from 'express'

import { IPatient } from './interfaces/patient'
import { IPatientApiResponse } from './interfaces/patientApiResponse'
import { PatientService } from './service/patientService'

export const app = express()
app.use(cors())
const port = 3000

const patientService = new PatientService()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/patient/:id', async (req: Request, res: Response<IPatient>) => {
  const patient = await patientService.getPatientById(req.params.id)
  res.json(patient)
})

app.get('/patients/', async (req: Request, res: Response<IPatientApiResponse>) => {
  const patients = await patientService.getPatients()

  console.log(patients)

  res.json(patients)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
