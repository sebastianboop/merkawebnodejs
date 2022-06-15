const respuesta=require("express/lib/response");

const controladoragregarProductos={};

controladoragregarProductos.agregar=(peticion,respuesta)=>{
    respuesta.render('agregarProductos.ejs');
};

module.exports=controladoragregarProductos;