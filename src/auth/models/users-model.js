'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const SECRET = process.env.SECRET;

const users = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, required: true},
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
  let roles = {admin : ['read','create','update','delete'],
    writer: ['read','create'],
    regular: ['read'],
    editor:['read','create','update'],
  };
  let token = jwt.sign({ username: user.username, role: roles[user.role]}, SECRET, {
    expiresIn: '15m'});
  return token;
};
users.statics.list =  async function(){
  let results = await this.find({});
  return results;
};
users.statics.verifyToken = function (token) {
  let parsedToken = jwt.verify(token, SECRET);
  let query ={username: parsedToken.username};
  return this.findOne(query)
    .then(()=>{
      return parsedToken;
    });
};
users.statics.can = function (permision){
  console.log(permision);
  if(permision){
    console.log(permision);
    return Promise.resolve(true);
  }
  else{
    return Promise.resolve(false);
  }
};


module.exports = mongoose.model('users',users);


