const fs = require('fs');
const path = require('path');

const handleFile = (res, file) => {
  const ext = file.split('.')[1];

  fs.readFile(path.join(__dirname, '..', 'public', file), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/' + ext});
      res.end(file);
    }
  });
}

const handleStaticFiles = (res, url) => {
  const file = url.substring(1, url.length);

  handleFile(res, file);
}

module.exports = {
  handleStaticFiles: handleStaticFiles,
  handleFile: handleFile
};
