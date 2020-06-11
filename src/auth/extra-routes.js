'use strict';

const express = require('express');
const authRouter = express.Router();
const Users = require('./models/users-model');
const bearerMiddleware = require('./middleware/bearer');

authRouter.get('/secret', bearerMiddleware, (req,res) => {
  res.status(200).json(req.user);
});

module.exports =  authRouter;
