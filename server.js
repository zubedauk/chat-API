// server.js
// where your node app starts

// init project
const express = require('express');
const lodash = require('lodash');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.send("hello")
});

app.get('/random', function(request, response) {
  let choice = lodash.sample(["hi", "hola", "td bem"])
  response.send(choice);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
