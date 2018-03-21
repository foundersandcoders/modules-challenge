const handler = require('./server.js').handler;
const test = require('tape');

const endpoints = [
  {url: '/unknown', status_code: 404, body: '404 server error'},
  {url: '/', status_code: 200, body: 'view = \'fac\''},
  {url: '/fac', status_code: 200, body: 'view = \'fac\''},
  {url: '/dwyl', status_code: 200, body: 'view = \'dwyl\''},
  {url: '/css/stylesheet.css', status_code: 200, body: 'body {'},
  {url: '/js/request.js', status_code: 200},
  {url: '/js/index.js', status_code: 200, body: 'request.get('},
  {url: '/api/repos/fac', status_code: 200},
  {url: '/api/repos/dwyl', status_code: 200}
];

endpoints.forEach((endpoint) => {
  test('GET :: ' + endpoint.url + ' :: returns ' + endpoint.status_code, (t) => {
    t.plan(2);

    handler({url: endpoint.url}, {
      writeHead: (status, _content) => {
        t.equal(status, endpoint.status_code);
      },
      end: (body) => {
        t.ok(endpoint.body ? body.includes(endpoint.body) : body);
      }
    });
  });
});

test.onFinish(() => process.exit(0));

