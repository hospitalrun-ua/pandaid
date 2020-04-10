import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { JwtAuthGuard } from './../src/auth/jwt-auth.guard'
import { RolesGuard } from './../src/auth/roles.guard'
import * as mockData from '../src/resources/resources.mock.json'
import { ResourcesResponse } from '../src/resources/resources.dto'

describe('ResourcesController (e2e)', () => {
  let app: INestApplication

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
})
