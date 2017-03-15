const http = require('http');
const fs = require('fs');
const path = require('path');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const handler = require('./handler.js');

const server = http.createServer(handler);

server.listen(port);

console.log('server running on: http://' + host + ':' + port);

