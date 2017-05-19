/*
* En un archivo ej5.json, guardar todas los nombres de los planetas que aparecen en la pelicula "Attack of the Clones"
* 
* 1) Obtener los ids de los planetas leyendo el json del archivo planets.json buscando por id=5
* 2) Obttener los planetas del archivo planets.json
* 3) Escribir el resultado en un nuevo archivo (ej5.json) con el siguiente formato:
* 
* ["planeta1", "planeta2", ...]
*
* Home work: relizar este ejercicio usando las distintas tecnicas vistas en clase
* Guardar las distintas versiones en archivos ej5.1.js, ej5.2.js, ej5.3.js, ej5.4.js
*/

// Inclusión del módulo (core) "fs", necesario para trabajar con el file system
// https://nodejs.org/api/modules.html#modules_core_modules
const fs = require('fs');

// constantes con planetas
const planetsFile = 'planets.json';
const filmFile = "films.json";

/**
 * Leer un archivo y retornar un json a partir de su contenido
 * @param {string} fileName 
 */
const readJSON = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(`../data/${fileName}`, (err, data) => {
      if (err) {
				// early return en caso de error
        // Return a promise rejected
        const error = new Error(`No se pudo leer el archivo ${peopleFile}`);
        return reject(error);
      }

			// obtener el json
      let parsed = null;
      try {
        parsed = JSON.parse(data);
      } catch (error) {
        const error = new Error(`No se pudo parsear el archivo ${fileName}`);
				// early return en caso de error
        // Return a promise rejected
        return reject(error);
      }

      // Return a promise resolved
      return resolve(parsed);
    });
  });
};

/**
 * Recibe un objeto y lo escribe en un archivo en forma de json
 * @param {string} fileName 
 * @param {object} dataObject
 */
const writeJSON = (fileName, dataObject) => {
  // JSON.stringify no genera errores, por lo que no es necesario el Try Catch
  const data = JSON.stringify(dataObject);

  return new Promise((resolve, reject) => {
    fs.writeFile(`./${fileName}`, data, err => {
      if (err) {
        const error = new Error(`No se pudo escribir el archivo ${fileName}`);
				// early return en caso de error
        // Return a promise rejected
        return reject(error);
      }

      // Continuation Passing Style (success, empty data)
			// Return a promise resolved
      return resolve(null);
    });
  });
};

let selectedFilm = null;
let planetsFilms = null;

// obtener el film
readJSON(filmFile)
  .then(film => {
		// obtener el objeto de Attack of the Clone
    selectedFilm = film.find(item => item.id === '5');
    return readJSON(planetsFile);
  })
  .then(planets => {
	// obtener los nombres de los planets
    planetsFilms = planets.filter(planet => selectedFilm.planets.includes(planet.id))
				   .map(planet => planet.name);
		// escribir en un archivo
    return (planetsFilms)
	//return writeJSON(ej3File, lukeFilms);
  })
  .then((result) => {
    console.log("resultado: "+result);
  })
  .catch(err => {
    console.log(err);
  });