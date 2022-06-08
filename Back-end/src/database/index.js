//CONECTAR COM O BANCO DE DADOS
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://redeSocial:123@redesocial.zw9n2p4.mongodb.net/redeSocial');
mongoose.Promise = global.Promise;

module.exports = mongoose; 

