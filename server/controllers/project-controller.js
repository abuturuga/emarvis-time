const Router = require('express').Router(),
      Model  = require('../models/project-model');


Router.get('/', (req, res) => {
  Model.all()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

module.exports = Router;
