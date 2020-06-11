'use strict';

const express = require('express');
const authRouter = express.Router();
const bearerMiddleware = require('./middleware/bearer');
const permissions = require('../auth/middleware/authorize');

authRouter.get('/secret', bearerMiddleware, (req,res) => {
  res.status(200).json(req.user);
});

authRouter.get('/read', bearerMiddleware, permissions('read'), (req,res)=>{
  res.send('you can read');
});
authRouter.post('/add', bearerMiddleware, permissions('create'), (req,res)=>{
  res.send('you can create');
});
authRouter.put('/change', bearerMiddleware, permissions('update'), (req,res)=>{
  res.send('you can update');
});
authRouter.delete('/remove', bearerMiddleware, permissions('delete'), (req,res)=>{
  res.send('you can delete');
});
module.exports =  authRouter;
