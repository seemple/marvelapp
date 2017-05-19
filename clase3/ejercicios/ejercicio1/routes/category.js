const models = require("../model");

//Funciones que devuelven la respuesta del método app.get()
//Todas conectan con el modelo.

exports.list = (req, res) => {
    models.category
      .getAll()
      .then(categories => res.json(categories))
      .catch(err => res.status(500).json({ err }));
  };
  
exports.get = (req, res) => {
    models.category
      .getById(req.params.id)
      .then(category => res.json(category))
      .catch(err => res.status(500).json({ err }));
};


const categories_all = models.category.getAll();

exports.add = (req, res) => {
    models.category
      .addCategory(req.body,categories_all)
      .then(categories => res.status(201).json(categories))
      .catch(err => res.status(500).json({ err }));
};