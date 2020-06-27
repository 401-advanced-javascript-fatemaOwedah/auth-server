'use strict';

const {server} = require('../src/server');
const supergoose = require('@code-fellows/supergoose');

jest.spyOn(global.console, 'log');
const mockRequest = supergoose(server);

describe('web server',()=>{  
  let token = null;
  it('should /signup as an admin role', () => {
    let testData = {
      username:'sohill@test.com',
      password:'1234',
      role: 'editor',
    };
    return mockRequest
      .post('/signup')
      .set('Content-Type', 'application/json')
      .send(testData)
      .then(data => {
        expect(data.status).toBe(200);
      });
  });
  
  it('should  /signin as an admin role', () => {
      
    return mockRequest
      .get('/signin')
      .set('Authorization', `Basic c29oaWxAdGVzdC5jb206MTIzNA==`)
      .then(data => {
        token = data.body.token;
        expect(data.status).toBe(404);
      });
  });
  
  it('should get /users', () => {
    return mockRequest
      .get(`/users`)
      .set('Authorization', `Bearer ${token}`)
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
    
  it('should get /secret', () => {
    return mockRequest
      .get(`/users`)
      .set('Authorization', `Bearer ${token}`)
      .then(results => {
        expect(results.status).toBe(200);
      }); 
  });
  
  it('should get /read', () => {
    return mockRequest
      .get(`/read`)
      .set('Authorization', `Bearer ${token}`)
      .then(results => {
        expect(results.status).toBe(500);
      }); 
  });
  it('should postt /add', () => {
    return mockRequest
      .post(`/add`)
      .set('Authorization', `Bearer ${token}`)
      .then(results => {
        expect(results.status).toBe(500);
      }); 
  });
  
  it('should put /change', () => {
    return mockRequest
      .put(`/change`)
      .set('Authorization', `Bearer ${token}`)
      .then(results => {
        expect(results.status).toBe(500);
      }); 
  });
  
  it('should postt /remove', () => {
    return mockRequest
      .delete(`/remove`)
      .set('Authorization', `Bearer ${token}`)
      .then(results => {
        expect(results.status).toBe(500);
      }); 
  });
  
});