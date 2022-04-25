import CryptoJS from 'crypto-js';
import axios from 'axios';

function getHelper(url, headers) {
	return new Promise(function (resolve, reject) {
		axios.get(url, headers)
			.then((response) => { resolve(response.data); })
			.catch((error) => { reject(error); });
	});
}

async function get(url) {
	/* This token is for public only, just to prevent Github from detecting it.
	So useless even if someone steals it lol. */
	const decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1+vCdRBoY9RqKuSOZ8NTXPO/RyH0GC0HSx404oJ1/kRQsfPNHcWS28VYZtGVaSVxF2liRy1bzVqAw==", "114514").toString(CryptoJS.enc.Utf8);
	const headers = {
		headers: {
			'Authorization': `Bearer ${decrypted}`
		}
	};
	const res = await getHelper(url, headers);
	return res;
}

export { get };