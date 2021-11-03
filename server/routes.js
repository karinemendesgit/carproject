var express = require('express');
var routes = express.Router();
var data = [];

routes.get('/', function (req, res) {
    res.json(data);
});

routes.post('/', function (req, res) {
    data.push({
        image: req.body.image,
        brandModel: req.body.brandModel,
        year: req.body.year,
        plate: req.body.plate,
        color: req.body.color
    });
    res.json('Carro cadastrado com êxito', data)
});

module.exports = routes;