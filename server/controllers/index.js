const express = require('express'),
      Router = express.Router(),
      UnitController = require('./unit-controller');


Router.use('/unit', UnitController);
Router.use('/project', UnitController);
module.exports = Router;
