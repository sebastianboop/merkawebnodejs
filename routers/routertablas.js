const express=require('express');
const tablas=express.Router();

const controladortablas=require("../controllers/controllertablas");

tablas.get("/tablas",controladortablas.tablas);

module.exports=tablas;

/*

const express=require('express');
const registrarse=express.Router();

const controladorRegistrarse=require("../controllers/controllerRegistrarse");

registrarse.get("/registrarse",controladorRegistrarse.registrarse);

module.exports=registrarse;
*/