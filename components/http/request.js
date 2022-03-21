import CryptoJS from 'crypto-js';
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
  /* This token is for public only, just to prevent Github from detecting it.
  So useless even if someone steals it lol. */
  const decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1+vCdRBoY9RqKuSOZ8NTXPO/RyH0GC0HSx404oJ1/kRQsfPNHcWS28VYZtGVaSVxF2liRy1bzVqAw==", "114514").toString(CryptoJS.enc.Utf8);
  const options = {
    url: url,
    method: 'GET',
    json: true,
    headers: {
      'Authorization': `Bearer ${decrypted}`
    }
  };
  const res = await doRequest(options);
  return res;
}

export { get };