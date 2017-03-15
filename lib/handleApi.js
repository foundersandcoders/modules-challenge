const handleApi = (res, apiResponse) => {
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(apiResponse));
}

module.exports = {
  handleApi: handleApi
}
