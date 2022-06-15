const respuesta=require("express/lib/response");

const controladortablas={};

controladortablas.tablas=(peticion,respuesta)=>{
    respuesta.render('tablas.ejs');
};

module.exports=controladortablas;