'use strict';

var express = require('express');
var cors = require('cors');
var routes = require('./routes');

var app = express();
app.use(cors());

app.use('/car', routes);

app.listen(3000);