const readJSON = require('read-json');
const path = require('path');

const booksFile = path.resolve(__dirname, '../data/books.json');
const categoriesFile = path.resolve(__dirname, '../data/categories.json');

exports.fetchBooks = () => {
  return new Promise((resolve, reject) => readJSON(booksFile, (error, books) => {
    if (error) {
      return reject(error);
    }

    resolve(books);
  }));
};

exports.fetchCategories = () => {
  return new Promise((resolve, reject) => readJSON(categoriesFile, (error, categories) => {
    if (error) {
      return reject(error);
    }

    resolve(categories);
  }));
};

//Traigo la lista y obtengo la cantidad
const categoriesList = {};
fetchCategories().then(categories => categoriesList).catch(error);
	
exports.createCategory = (newCategory) =>{

	let cantidad = categories.length;
	
	// Calculo el nuevo ID
	newCategory.id = cantidad+1;
	
	// Guardarlo en el json
	return new Promise((resolve,reject) => {
		//Agregarlo a la lista con el ultimo id
		categories.concat(newCategory);
		if(error){
			return reject(error);
		}
	// retornar el nuevo
		resolve (newCategory);
	});
}
