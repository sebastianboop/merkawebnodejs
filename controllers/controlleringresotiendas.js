const respuesta=require("express/lib/response");

const controladoringresotienda={};

controladoringresotienda.ingresotienda=(peticion,respuesta)=>{
    respuesta.render('tiendaIndividualBoceto.ejs');
};

module.exports=controladoringresotienda;