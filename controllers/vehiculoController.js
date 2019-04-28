'use strict';
const uuid= require('uuid/v4');
var mongoose= require('mongoose');
var Dueño=require('../models/dueño');
var Vehiculo=require('../models/vehiculo');
var each=require('sync-each');
class VehiculoController{
    cargarVista(req, res){
        Vehiculo.find({}, (err, listaVehiculos)=>{
           if(err){
               req.flash('info', 'Ocurrio un error');
               res.redirect('/vehiculo');
           } else if(listaVehiculos){
               var lista=[];
           }
        });
    }
}
module.exports=VehiculoController;