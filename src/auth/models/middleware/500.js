'use strict ';

module.exports = (error, req, res, next ) => {
  res.status(500);
  res.json({error: error});
}; 