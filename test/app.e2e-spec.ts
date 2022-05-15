import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from "../src/app.module";

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe("Create employee", ()=> {
    it('/employee (POST)', () => {
      return request(app.getHttpServer())
        .post('/employee')
        .send({
          "name" : "Test",
          "firstName" : "Teste",
          "department" : "Teste"
        })
        .expect(201)
        .then(( res)=>{
          expect(res.body.id).toBeDefined()
        })
    });
  })

  describe("Get employee", ()=>{
    it('/employee/all (GET)', () => {
      return request(app.getHttpServer())
        .post('/employee/all')
        .expect(201)
        .then(( res)=>{
          expect(res.body.length).toBeDefined()
        })
    });
  })

  afterAll(async () => {
    await app.close();
  });
});
