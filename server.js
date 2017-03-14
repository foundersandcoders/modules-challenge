const http = require('http');
const fs = require('fs');
const path = require('path');
const repos = require('./repos.json');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const handler = (req, res) => {
  const url = req.url;

  console.log('URL: ', url);

  if (url === '/') {
    fs.readFile(path.join(__dirname, 'fac.html'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(file);
      }
    });
  } else if (url === '/fac') {
    fs.readFile(path.join(__dirname, 'fac.html'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(file);
      }
    });
  } else if (url === '/dwyl') {
    fs.readFile(path.join(__dirname, 'dwyl.html'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(file);
      }
    });
  } else if (url === '/css/stylesheet.css') {
    fs.readFile(path.join(__dirname, 'stylesheet.css'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/css'});
        res.end(file);
      }
    });
  } else if (url === '/js/request.js') {
    fs.readFile(path.join(__dirname, 'request.js'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.end(file);
      }
    });
  } else if (url === '/js/index.js') {
    fs.readFile(path.join(__dirname, 'index.js'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.end(file);
      }
    });
  } else if (url === '/api/repos/fac') {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(repos.fac));
  } else if (url === '/api/repos/dwyl') {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(repos.dwyl));
  } else {
    res.writeHead(404, {'content-type': 'text/plain'});
    res.end('404 server error');
  }
}

const server = http.createServer(handler);

server.listen(port);

console.log('server running on: http://' + host + ':' + port);

module.exports = {
  server: server,
  handler: handler
}

