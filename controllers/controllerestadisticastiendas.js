const respuesta=require("express/lib/response");

const controladorestadisticaTienda={};

controladorestadisticaTienda.estadisticatiendas=(peticion,respuesta)=>{
    respuesta.render('estaditicasTienda.ejs');
};

module.exports=controladorestadisticaTienda;