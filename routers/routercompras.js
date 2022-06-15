const express=require('express');
const compra=express.Router();

const controlador=require("../controllers/controllerCompras");

compra.get("/misCompras",controlador.compra);

module.exports=compra;