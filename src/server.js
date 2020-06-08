'use strict';

const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./public'));

module.exports = {
  server: app,
  start: port=>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Listening to PORT'));

  },
};