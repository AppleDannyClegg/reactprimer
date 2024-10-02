import { faker } from '@faker-js/faker'
import { IPatient } from '../interfaces/patient'
import { IPatientApiResponse } from '../interfaces/patientApiResponse'

export class PatientService {
  async getPatientById(id: string): Promise<IPatient> {
    console.log(id)
    return {
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      age: faker.number.int({ min: 1, max: 100 }),
      address: faker.location.streetAddress(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      images: [
        faker.image.urlLoremFlickr({ width: 200, height: 200, category: 'xray' }),
        faker.image.urlLoremFlickr({ width: 200, height: 200, category: 'xray' }),
        faker.image.urlLoremFlickr({ width: 200, height: 200, category: 'xray' }),
        faker.image.urlLoremFlickr({ width: 200, height: 200, category: 'xray' }),
        faker.image.urlLoremFlickr({ width: 200, height: 200, category: 'xray' }),
        faker.image.urlLoremFlickr({ width: 200, height: 200, category: 'xray' })
      ]
    }
  }

  async getPatients(): Promise<IPatientApiResponse> {
    const patients = [] as IPatient[]

    for (let i = 0; i < 12; i++) {
      const images = [] as string[]

      for (let i = 0; i < Math.random() * 10; i++) {
        images.push(faker.image.urlLoremFlickr({ width: 200, height: 200, category: 'xray' }))
      }

      const patient = {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        age: faker.number.int({ min: 1, max: 100 }),
        address: faker.location.streetAddress(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        images: images
      }
      patients.push(patient)
    }

    const response: IPatientApiResponse = {
      patients: patients,
      total: patients.length,
      skip: 0,
      limit: 10
    }
    return response
  }
}
