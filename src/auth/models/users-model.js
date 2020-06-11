'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const SECRET = process.env.SECRET;

const users = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
});
let complexity = 10;

users.pre('save', async function(){
  if (!users.username) {
    this.password = await bcrypt.hash(this.password, complexity);
    console.log(this.password);
  }
});
users.statics.authenticateBasic = function(auth) {
  return this.findOne({username:auth.username})
    .then(user => user.passCompare(auth.password))
    .catch(console.error);
};
users.methods.passCompare = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

users.methods.generateToken = function(user) {
  let token = jwt.sign({ username: user.username}, SECRET);
  return token;
};
users.statics.list =  async function(){
  let results = await this.find({});
  return results;
};
module.exports = mongoose.model('users',users);


