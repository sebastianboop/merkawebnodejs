const express=require('express');
const tablastiendas=express.Router();

const controladortablastiendas=require("../controllers/controllertablastiendas");

tablastiendas.get("/tablastiendas",controladortablastiendas.tablastiendas);

module.exports=tablastiendas;

/*

const express=require('express');
const registrarse=express.Router();

const controladorRegistrarse=require("../controllers/controllerRegistrarse");

registrarse.get("/registrarse",controladorRegistrarse.registrarse);

module.exports=registrarse;
*/