const respuesta=require("express/lib/response");

const controladorvistaPropietario={};

controladorvistaPropietario.vistaPropietario=(peticion,respuesta)=>{
    respuesta.render('vistapropietario.ejs');
};

module.exports=controladorvistaPropietario;