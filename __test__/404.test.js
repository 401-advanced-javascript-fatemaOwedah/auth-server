'use strict';

const errorHandler = require('../src/auth/models/middleware/404');
let req = {};
let res = { status: function (s) { this.status = s; return this; }, json: () => { } };
describe('server', () => {
  it('should respond ', () => {
    errorHandler(req, res);
    expect(res.status).toBe(404);
  });
});