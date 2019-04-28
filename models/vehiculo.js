'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VehiculoSchema = Schema({
id: mongoose.Schema.types.ObjectId,
externalId: String,
placa: String,
marca: String,
año: String,
dueño:{type: mongoose.Schema.Types.ObjectId,
     ref: 'dueño'}
}, false);
module.exports = mongoose.model('vehiculo', VehiculoSchema);