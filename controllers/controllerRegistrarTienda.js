const respuesta=require("express/lib/response");

const controladorregistrarTienda={};

controladorregistrarTienda.registrarTienda=(peticion,respuesta)=>{
    respuesta.render('registroTienda');
};

module.exports=controladorregistrarTienda;