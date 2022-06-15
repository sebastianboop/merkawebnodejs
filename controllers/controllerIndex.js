const respuesta=require("express/lib/response");

const controlador={};

controlador.mostrarIndex=(peticion,respuesta)=>{
    respuesta.render('index');
};

module.exports=controlador;

