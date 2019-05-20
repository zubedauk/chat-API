const express = require("express");
const app = express();

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

const welcomeMessage = {
  id: 0,
  from: "Kash",
  text: "Welcome to CYF chat system!"
}

//This array is our "data store".  
//Note that messages will be lost when glitch restarts our server.
const messages = [welcomeMessage]

app.listen(process.env.PORT);
