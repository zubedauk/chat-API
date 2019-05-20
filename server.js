const express = require("express");
const app = express();

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage]

app.listen(process.env.PORT);
