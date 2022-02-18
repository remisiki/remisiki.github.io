const request = require('request');

function doRequest(options) {
  return new Promise(function (resolve, reject) {
    request(options, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}

async function get(url) {
  const options = {
    url: url,
    method: 'GET',
    json: true,
    headers: {
      'Authorization': 'Bearer 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'
    }
  };
  const res = await doRequest(options);
  return res;
}

export { get };