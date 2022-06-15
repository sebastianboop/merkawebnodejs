const express=require('express');
const rutaIndex=express.Router();

const controladorIndex=require("../controllers/controllerIndex");

rutaIndex.get("/",controladorIndex.mostrarIndex);

module.exports=rutaIndex;