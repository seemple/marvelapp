const rp = require('request-promise');
const crypto = require('crypto');
const publickey = "46c38663204ac9b44661f0fd11a06fec";
const privatekey = "9f60216c159b7d03b56de6d083c0147054999210";
const ts = + new Date();
let toHash = ts+privatekey+publickey;
const hash = crypto.createHash('md5').update(toHash).digest('hex');

//comics?format=comic&formatType=comic&noVariants=true&titleStartsWith=avengers&hasDigitalIssue=true&orderBy=focDate

const comics = {
    uri: 'https://gateway.marvel.com:443/v1/public/comics',
    qs: {
        apikey: publickey,
		ts: ts,
		hash: hash,
		format: "comic",
		formatType: "comic",
		noVariants: true,
		titleStartsWith: "Avengers",
		hasDigitalIssue: true,
		orderBy: "focDate",
		dateRange: "2013-01-01,2013-12-31"
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response 
};

const character = {
    uri: 'https://gateway.marvel.com:443/v1/public/characters',
    qs: {
        apikey: publickey,
		name: 'spider-man',
		ts: ts,
		hash: hash
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response 
};

let characters = null;

rp(comics)
    .then(function (result) {
		//Obtengo la data de los comics
		let comics = result.data.results;
		
		characters = comics
		// Extraigo los superheroes de la serie seleccionadda
		.map(comic => comic.characters)
		// Selecciono aquellas historietas que tengan al menos un superheroe
		.filter(character => character.returned > 0)
		console.log(characters);
    })
    .catch(function (err) {
        console.log(err); 
    });
	
	//TO-DO: Obtener los superheroes de todos los comics en un array simple, eliminando duplicados.
	//TO-DO: En base al array de superheroes, hacer una llamada para obtener los datos de cada superheroe.