var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write("<h1>The date and time are currently: </h1>" + dt.myDateTime() +"Hello");
  res.end();
}).listen(8080);