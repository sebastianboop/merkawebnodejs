const express=require('express');
const registrarse=express.Router();

const controladorRegistrarse=require("../controllers/controllerRegistrarse");

registrarse.get("/registrarse",controladorRegistrarse.registrarse);

module.exports=registrarse;