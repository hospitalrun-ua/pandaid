import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AuthModule } from '../src/auth/auth.module'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/auth/login (POST) - 401', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'invalid', password: 'secret' })
      .expect(401)
  })

  it('/auth/login (POST) - 201', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'admin@example.com', password: 'admin' })
      .expect(201)
  })
})
