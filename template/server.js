var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Version: ' + JSON.stringify(process.versions, 0, 2)+ '\n');
  res.write('Env: ' + JSON.stringify(process.env, 0, 2)+ '\n');
  res.end('Hello World\n');
}).listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP);
