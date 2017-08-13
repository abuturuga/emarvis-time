const path = require('path'),
      bodyParser = require('body-parser'),
      express = require('express'),
      mongoose = require('mongoose'),
      controllers = require('./controllers/index');
      app = express();


mongoose.connect('mongodb://localhost/emarvis-time');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1.0/', controllers);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
