'use strict';

const userModel = require('../models/users-model');

module.exports= (capability)=>{
  return (req,res,next) =>{
    console.log('role======>',req.user.role);
    console.log('capab=======>', capability);
    return userModel.can(req.user.role.includes(capability))
      .then(result =>{
        result ? next() : next('access Denide');
      });
    
  };
};