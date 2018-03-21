const handlers = require('./handlers');

const router = (req, res) => {
    const url = req.url;
  
    if (url === '/' || url === '/fac') {
        handlers.fileHandler(res, 'public/fac.html');
    } else if (url === '/dwyl') {
        handlers.fileHandler(res, 'public/dwyl.html');
    } else if (url.indexOf('api') !== -1) {
        handlers.apiHandler(res, url);
    } else if (url.indexOf('public') !== -1) {
        handlers.fileHandler(res, url);
    } else {
      res.writeHead(404, {'content-type': 'text/plain'});
      res.end('404 error');
    }
  }

  module.exports = router;