const path = require('path'),
      bodyParser = require('body-parser'),
      express = require('express'),
      mongoose = require('mongoose'),
      app = express();


app.get('/api/v1.0', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
