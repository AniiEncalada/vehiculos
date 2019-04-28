'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DueñoSchema = Schema({
id: mongoose.Schema.types.ObjectId,
externalId: String,
nombre: String,
apellido: String,
cedula: String
}, false);
module.exports = mongoose.model('dueño', DueñoSchema);