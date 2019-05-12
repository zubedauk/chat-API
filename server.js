// server.js
// where your node app starts

// init project
const express = require('express');

const app = express();

app.get('/', function(request, response) {
  response.send("hello CYF")
});


app.get('/data', function(request, response) {
  response.json([1,2,3])
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});


//read about routing
// http://expressjs.com/en/starter/basic-routing.html
