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


exports.add = (req, res) => {
    models.category
      .add(req.body)
      .then(newCategory => res.json(newCategory))
      .catch(err => res.status(500).json({ err }));
};