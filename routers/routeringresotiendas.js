const express=require('express');
const ingresotienda=express.Router();

const controladoringresotienda=require("../controllers/controlleringresotiendas");

ingresotienda.get("/ingresoALasTiendas",controladoringresotienda.ingresotienda);

module.exports=ingresotienda;