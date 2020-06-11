'use strict';

const users = require('../models/users-model');

module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    next('User is not loggedin');
    return;
  }

  let bearerToken = req.headers.authorization.split(' ').pop();

  users.verifyToken(bearerToken)
    .then(decodedUserObject => {
      console.log('decode======>',decodedUserObject);
      req.user = decodedUserObject;
      next();
    }).catch(err=> next('Protected: Invalid User Token'));
    
};