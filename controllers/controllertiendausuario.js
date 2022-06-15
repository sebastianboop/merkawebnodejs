const respuesta=require("express/lib/response");

const controlador={};

controlador.tienda=(peticion,respuesta)=>{
    respuesta.render('tiendasUsuario.ejs');
};

module.exports=controlador;