const fs = require('fs');
const path = require('path');
const repos = require('./repos.json');

const fileHandler = (res, filepath) => {
    const extension = filepath.split('.')[1];
    const extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon',
    };

    fs.readFile(path.join(__dirname, '..', filepath), 'utf8', (err, file) => {
        /* istanbul ignore if */
        if (err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('server error');
        } else {
            res.writeHead(200, {'content-type': extensionType[extension]});
            res.end(file);
        }
    });
}

const apiHandler = (res, url) => {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(repos[url.split('/')[3]]));
}

module.exports = {fileHandler, apiHandler};


