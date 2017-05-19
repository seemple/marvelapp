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

const traerCategorias = () => {
  return new Promise((resolve, reject) => 
	  readJSON(categoriesFile, (error, categories) => {
		if (error) {
		  return reject(error);
		}

		resolve(categories);
	  })
  );
};

const add = (filename, element) => {
  return fetch(filename).then(elements => {
    element.id = uuid.v4();
    elements.push(element);
    return writeFile(filename, elements).then(() => element);
  });
};

exports.createCategory = (newCategory,data) =>{
	
	// Calculo el nuevo ID
	data.then(categories =>{
		cantidad = categories.length;
		newId = cantidad+1;
		newCategory.id = newId;
		categories += newCategory;
		return Promise.resolve(categories);
	}).catch(err => console.log(err));
	
};

exports.fetchCategories = traerCategorias;