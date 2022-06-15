const respuesta=require("express/lib/response");

const controlador={};

controlador.compra=(peticion,respuesta)=>{
    respuesta.render('administrarCompras.ejs');
};

module.exports=controlador;