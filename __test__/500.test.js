'use strict';

const errorHandler = require('../src/auth/models/middleware/500');
let req = {};
let res = { status: function (s) { this.status = s; return this; }, json: () => { } };
let err = 'error';
let next = jest.fn();
describe('server', () => {
  it('should respond ', () => {
    errorHandler(err, req, res, next);
    expect(res.status).toBe(500);
  });
});