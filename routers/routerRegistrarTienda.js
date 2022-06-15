const express=require('express');
const registrarTienda=express.Router();

const controladorregistrarTienda=require("../controllers/controllerRegistrarTienda");

registrarTienda.get("/RegistrarTienda",controladorregistrarTienda.registrarTienda);

module.exports=registrarTienda;

/*

const express=require('express');
const registrarse=express.Router();

const controladorRegistrarse=require("../controllers/controllerRegistrarse");

registrarse.get("/registrarse",controladorRegistrarse.registrarse);

module.exports=registrarse;
*/