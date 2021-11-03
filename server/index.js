'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.use('/car', routes);

app.listen(3000);