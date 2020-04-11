import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { JwtAuthGuard } from './../src/auth/jwt-auth.guard'
import { RolesGuard } from './../src/auth/roles.guard'
import * as mockData from '../src/resources/resources.mock.json'
import { ResourcesResponse, ResourceBase, ResourceStates, ResourceStateRequest } from '../src/resources/resources.dto'

describe('ResourcesController (e2e)', () => {
  let app: INestApplication

  const resourceBaseMock: ResourceBase = {
    name: 'Mock',
    quantity: 5,
    price: 5500,
    state: 'Open',
    beneficiary: {
      name: 'КНП «ЦРЛ Києво-Святошинської районної ради»',
      address: 'Боярка, вул. Соборності, 51 - адреса лікарні'
    },
    contactPerson: {
      name: 'Ivan Ivanox',
      email: 'kanboycrl@gmail.com',
      phone: '38(067)793-53-61',
      website: 'ks-crl.org.ua'
    },
    deadline: 1586551208
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/resources (GET)', () => {
    return request(app.getHttpServer())
      .get('/resources')
      .expect(200)
      .expect(() => {
        const responseMock = new ResourcesResponse()
        responseMock.list = mockData
        return responseMock
      })
  })

  it('/resources (POST)', () => {
    return request(app.getHttpServer())
      .post('/resources')
      .send(resourceBaseMock)
      .expect(204)
  })

  it('/resources/:id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/resources/1')
      .send(resourceBaseMock)
      .expect(200)
  })

  it('/resources/:id/state (PUT)', () => {
    return request(app.getHttpServer())
      .put('/resources/1/state')
      .send({
        state: ResourceStates.ARCHIVED
      })
      .expect(200)
  })
})
