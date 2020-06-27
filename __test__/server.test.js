'use strict';

const {server} = require('../src/server');
const supergoose = require('@code-fellows/supergoose');

jest.spyOn(global.console, 'log');
const mockRequest = supergoose(server);

describe('web server',()=>{
  let user={
    username:'fatema@test.com',
    password:'1234',
  };
  it('test route  /signup ', async() => {
    mockRequest
      .post('/signup')
      .send(user)
      .then(data => {
        expect(data.status).toBe(500);
      });
  });
  it('test route  /signin ', async() => {
    mockRequest
      .post('/signin')
      .send(user)
      .then(data => {
        expect(data.status).toBe(500);
      });
  });
  it('test route  /ouath ', async() => {
    mockRequest
      .get('/ouath')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });
  it('test route  /secret ', async() => {
    mockRequest
      .get('/secret')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });
  it('test route  /signup ', async() => {
    mockRequest
      .post('/signup')
      .send(user)
      .then(data => {
        expect(data.status).toBe(500);
      });
  });
  it('test route  /signin ', async() => {
    mockRequest
      .post('/signin')
      .send(user)
      .then(data => {
        expect(data.status).toBe(500);
      });
  });
  it('test route  /ouath ', async() => {
    mockRequest
      .get('/ouath')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });
  it('test route  /secret ', async() => {
    mockRequest
      .get('/secret')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });
});