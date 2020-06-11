'use strict';

const express = require('express');
const authRouter = express.Router();
const Users = require('./models/users-model');
const basicAuth = require('./middleware/basic');
const oauth = require('./middleware/oauth');

authRouter.post('/signup', (req, res,next) => {
  let user = new Users(req.body);
  user.save()
    .then(data => {
      let token = user.generateToken(data);
      res.cookie('name', token ,{ expires: new Date(Date.now() + 900000), httpOnly: true });
      res.status(200).send(token);
    });
});
  
authRouter.post('/signin', basicAuth, (req, res) => {
  res.cookie('name', req.token ,{ expires: new Date(Date.now() + 900000), httpOnly: true });
  res.status(200).send(req.token);
});

authRouter.get('/oauth', oauth, (req,res)=>{
  res.cookie('name', req.token ,{ expires: new Date(Date.now() + 900000), httpOnly: true });
  res.status(200).send(req.token);
});
  
authRouter.get('/users',(req, res) => {
  Users.list()
    .then(data=>{
      res.status(200).json(data);
    });
});
  
module.exports = authRouter;