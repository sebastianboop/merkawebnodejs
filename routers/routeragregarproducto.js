const express=require('express');
const agregar=express.Router();

const controladoragregarProductos=require("../controllers/controlleragregarproducto");

agregar.get("/agregarProducto",controladoragregarProductos.agregar);

module.exports=agregar;