import { IPatient } from './patient'

export interface IPatientApiResponse {
  patients: IPatient[]
  total: number
  skip: number
  limit: number
}
