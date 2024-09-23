// Create web server
// 1. Create a web server
// 2. Read the comments.json file
// 3. Return the contents of the comments.json file to the client

// 1. Create a web server
// 1.1. Load the http module
var http = require('http');

// 1.2. Create a web server
var server = http.createServer(function(req, res) {
  // 2. Read the comments.json file
  // 2.1. Load the fs module
  var fs = require('fs');
  // 2.2. Read the comments.json file
  fs.readFile('comments.json', function(err, data) {
    // 3. Return the contents of the comments.json file to the client
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(data);
  });
});

// 1.3. Start the web server
server.listen(3000, '