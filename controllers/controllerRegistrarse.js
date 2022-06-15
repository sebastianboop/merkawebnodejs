const respuesta=require("express/lib/response");

const controlador={};

controlador.registrarse=(peticion,respuesta)=>{
    respuesta.render('registrarse');
};

module.exports=controlador;