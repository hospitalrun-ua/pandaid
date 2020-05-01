import { Injectable } from '@nestjs/common'
import { Organization, Status } from './organizations.interface'

@Injectable()
export class OrganizationsService {
  private readonly organizations: Organization[]

  constructor() {
    this.organizations = [
      {
        id: 1,
        status: Status.NEW,
        name: 'UNICEF',
        URL: 'https://test.com',
        description: 'very good organization',
        region: 'kyiv',
        contactPersonFirstName: 'Пилипенко',
        contactPersonSecondName: 'Пилип',
        contactPersonEmail: 'test@test.com',
        contactPersonPhoneNumber: '231873612'
      }
    ]
  }

  getById(id: number) {
    return this.organizations.find(orientation => orientation.id === id)
  }

  addOne(organization: Organization) {
    this.organizations.push(organization)
  }
}
