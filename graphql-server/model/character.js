const mongo = require('./mongo');
const shortid = require('shortid');
const api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: '46c38663204ac9b44661f0fd11a06fec'
, privateKey: '9f60216c159b7d03b56de6d083c0147054999210'
});


const newBookId = () => 'BK-' + shortid.generate();

exports.add = book =>
  mongo.collection('books').then(col => {
    book._id = newBookId();
    return col.insert(book);
  });

exports.update = book =>
  mongo.collection('books').then(col => {
    return col.findOneAndUpdate({ _id: book._id }, book);
  });

exports.remove = id =>
  mongo.collection('books').then(col => {
    return col.remove({ _id: id });
  });

exports.getAll = () =>
	marvel.characters.findAll(10)
	  .then(res => {
		  return res.data
		  })
	  .catch(err => console.log(err))
	  .done();

exports.getById = id =>
	marvel.characters.find(id).then(res=> {return res.data})