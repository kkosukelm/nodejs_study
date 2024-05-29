var http = require('http');
const { json } = require('stream/consumers');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var q = url.parse(req.url, true).query;
  var txt = (q.year + "\n" + q.month);
  res.write(JSON.stringify(q));
  res.end();
}).listen(8080);