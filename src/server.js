'use strict';

const express = require('express');
const morgan = require('morgan');
const authRouter = require('./auth/router');
const extraRouter = require('./auth/extra-routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./public'));


app.use(authRouter);
app.use(extraRouter);



module.exports = {
  server: app,
  start: port=>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));

  },
};