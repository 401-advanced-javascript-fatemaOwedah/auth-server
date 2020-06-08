'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const userSchema = require('../user-schema');

let complexity = 10;

userSchema.pre('save', async function(){
  if (!userSchema.username) {
    this.password = await bcrypt.hash(this.password, complexity);
  }
});

userSchema.statics.authenticateBasic = function(auth) {
  return this.findOne({username:auth.username})
    .then(pass => {
      pass.compare(auth.password, this.password);
    }).catch(console.error);
};
