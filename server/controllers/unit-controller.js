const Router = require('express').Router(),
      Model  = require('../models/unit-model');


Router.get('/', (req, res) => {
  Model.all()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

Router.post('/', (req, res) => {
  Model.create(req.body.payload)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

Router.put('/:id', (req, res) => {
  Model.update(req.params.id, req.body.payload)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

Router.delete('/:id', (req, res) => {
  Model.remove(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

module.exports = Router;
