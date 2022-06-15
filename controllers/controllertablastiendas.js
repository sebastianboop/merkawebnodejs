const respuesta=require("express/lib/response");

const controladortablastiendas={};

controladortablastiendas.tablastiendas=(peticion,respuesta)=>{
    respuesta.render('formatoTablasPropietario.ejs');
};

module.exports=controladortablastiendas;