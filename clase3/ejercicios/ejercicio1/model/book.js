//Books Model Methods

// Metodos de la API
const api = require('./api');

// Get All: Trae todo los libros utilizando el metodo de la API fetchBooks
exports.getAll = () => api.fetchBooks();

//get by id: recibe un id como parametro. Utiliza fetchBooks tambien, pero luego hace un find en el objeto de books retornando el que coincida con el id recibido.
exports.getById = id => api.fetchBooks().then(books => books.find(book => book.id == id));

//get by category: recibe el id de la categoria como parametro. Utiliza fetchBooks tambien, y filtra todos los libros que incluyan el id de la categoria.
exports.getByCategoryId = id => api.fetchBooks().then(books => books.filter(book => book.categories.includes(id)));

//Add book: recibe el nuevo libro y lo agrega en el JSON de Libros.
exports.addBook = (newBook) => api.createBook().then(book);