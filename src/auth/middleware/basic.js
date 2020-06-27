'use strict';

const users = require('../models/users-model');
const base64 = require('base-64');

module.exports = (req, res, next) => {

  let [authType, encodedString] = req.headers.authorization.split(/\s+/);

  switch(authType.toLowerCase()) {
  case 'basic':
    return authBasic(encodedString);
  default:
    break;
  }
  function authBasic(authString) {
    let base64Buffer = Buffer.from(authString,'base64');
    let bufferString = base64Buffer.toString();
    let [username,password] = bufferString.split(':');
    let auth = {username,password};
    
    return users.authenticateBasic(auth)
      .then( user =>{
        console.log(user);
        req.user = user;
        req.token = user.generateToken(user);
        next();
      });
  }
};