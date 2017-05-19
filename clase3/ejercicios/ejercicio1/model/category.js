const api = require('./api');

exports.getAll = () => api.fetchCategories();

exports.getById = id => api.fetchCategories().then(categories => categories.find(category => category.id == id));

exports.addCategory = (newCategory,categories_all) => api.createCategory(newCategory,categories_all);
