'use strict';
const mongoose = require('mongoose');

const User = mongoose.Schema({
  username : {type : String, required: true},
  password: { type: String, required: true},
  email: { type: String, required: false},
});

module.exports = mongoose.model('User', User);
