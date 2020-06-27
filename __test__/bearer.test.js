'use strict';

const bearer = require('../src/auth/middleware/bearer');

describe('bearer MiddleWare',()=>{
  let consoleSpy;
  
  beforeEach(()=> {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(()=> {
    consoleSpy.mockRestore();
  });

  it('there are no user',()=>{
    let req = {headers:{
      authorizaton:'',
    }};
    let res = {};
    let next = jest.fn(); 
    bearer(req,res,next);
    expect(next).toHaveBeenCalled();
  });
  it('there is user',()=>{
    let req = {headers:{
      authorizaton:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvc28iLCJjYXBhYmlsaXR5IjpbInJlYWQiLCJjcmVhdGUiXSwiaWF0IjoxNTkxNzk1OTYzLCJleHAiOjE1OTE3OTY4NjN9.seMQ7Lea9ClUotOfFXNcjTnQZU9xu9jJSTLOgtzqBF8',
    }};
    let res = {};
    let next = jest.fn(); 
    bearer(req,res,next);
    expect(next).toHaveBeenCalled();
  });
});
