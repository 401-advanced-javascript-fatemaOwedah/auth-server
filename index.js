'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose.connect(process.env.MONGODB_URI, options);

server.start(process.env.PORT);
