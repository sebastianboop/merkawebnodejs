const respuesta=require("express/lib/response");

const controladoriniciarSesion={};

controladoriniciarSesion.iniciarSesion=(peticion,respuesta)=>{
    respuesta.render('iniciarsesion');
};

module.exports=controladoriniciarSesion;