var http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello World AMONI Team!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(1000); //the server object listens on port 8080
