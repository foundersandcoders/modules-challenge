var request = (function () {
  function _request (method, url, payload, cb) {
    var xhr = new XMLHttpRequest();
    var payloadString = JSON.stringify(payload);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          cb(null, JSON.parse(xhr.responseText));
        } else {
          cb(true);
        }
      }
    };
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(payloadString);
  };

  var get = function (url, cb) { _request('GET', url, null, cb); }
  var post = function (url, payload, cb) { _request('POST', url, payload, cb); }
  var put = function (url, payload, cb) { _request('PUT', url, payload, cb); }
  var del = function (url, cb) { _request('DELETE', url, null, cb); }

  return request = {
    get: get,
    post: post,
    put: put,
    del: del
  };
})();
