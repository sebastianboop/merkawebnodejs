const express=require('express');
const iniciarSesion=express.Router();

const controladoriniciarSesion=require("../controllers/controllerIniciarsesion");

iniciarSesion.get("/iniciarsesion",controladoriniciarSesion.iniciarSesion);

module.exports=iniciarSesion;

/*

const express=require('express');
const registrarse=express.Router();

const controladorRegistrarse=require("../controllers/controllerRegistrarse");

registrarse.get("/registrarse",controladorRegistrarse.registrarse);

module.exports=registrarse;
*/