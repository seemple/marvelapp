var api = require('marvel-api');
 
const marvel = api.createClient({
  publicKey: '46c38663204ac9b44661f0fd11a06fec'
, privateKey: '9f60216c159b7d03b56de6d083c0147054999210'
});

module.exports = {
	marvel
}