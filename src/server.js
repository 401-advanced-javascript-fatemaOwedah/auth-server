'use strict';

const express = require('express');
const morgan = require('morgan');
const authRouter = require('./auth/router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./public'));


app.use(authRouter);



module.exports = {
  server: app,
  start: port=>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));

  },
};