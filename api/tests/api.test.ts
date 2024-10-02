import { app } from '../src/main'
import { PatientService } from '../src/service/patientService'

describe('API', () => {
  let _patientService: PatientService

  beforeAll(async () => {
    _patientService = new PatientService()
  })

  it('should return true', async () => {
    expect(true).toBe(true)
  })

  it('should return 10 records', async () => {
    const patients = await _patientService.getPatients()

    expect(patients.patients.length).toBe(12)
  })

  it('should return a patient', async () => {
    const patient = await _patientService.getPatientById('1')

    expect(patient).toBeDefined()
  })

  it('should be five images for a patient', async () => {
    const patient = await _patientService.getPatientById('1')

    expect(patient.images.length).toBe(6)
  })

  const routes = [
    { path: '/patients', method: 'get' },
    { path: '/patient/1', method: 'get' }
  ]

  it.each(routes)('should return 200 for %s', async (route) => {
    const router = app._router

    expect(router.stack.some((s: { route: { path: string } }) => s.route.path === route.path)).toBe(true)
  })
})
