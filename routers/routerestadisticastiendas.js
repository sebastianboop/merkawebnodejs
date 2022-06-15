const express=require('express');
const estadisticatiendas=express.Router();

const controladorestadisticaTienda=require("../controllers/controllerestadisticastiendas");

estadisticatiendas.get("/estadisticaTienda",controladorestadisticaTienda.estadisticatiendas);

module.exports=estadisticatiendas;