'use strict';
const dotenv = require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT;

global.ROOTPATH = __dirname;

require('./config')(app);
const _ = require('lodash');
const moment = require('moment');
 
app.use('/auth', require('./auth'))

app.locals.moment = require('moment');

app.get('/dist-user-images/:filename', function(req, res) {
  var filename = req.params.filename.replace(/'/g, '');
  res.sendFile(path.resolve('./dist/App/assets/images/user/' + filename));
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

require('./routes')(app);

app.listen(PORT, function() {
  console.log('Server listening on PORT : ' + PORT);
})
