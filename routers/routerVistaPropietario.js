const express=require('express');
const vistaPropietario=express.Router();

const controladorvistaPropietario=require("../controllers/controllerVistaPropietario");

vistaPropietario.get("/vistapropietario",controladorvistaPropietario.vistaPropietario);

module.exports=vistaPropietario;

/*

const express=require('express');
const registrarse=express.Router();

const controladorRegistrarse=require("../controllers/controllerRegistrarse");

registrarse.get("/registrarse",controladorRegistrarse.registrarse);

module.exports=registrarse;
*/