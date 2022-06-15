const express=require('express');
const tienda=express.Router();

const controlador=require("../controllers/controllertiendausuario");

tienda.get("/tiendasVistaUsuario",controlador.tienda);

module.exports=tienda;