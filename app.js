const express= require('express');
const bodyparser=require('body-parser');

const servidor=express();



servidor.use(bodyparser.json());
servidor.use(bodyparser.urlencoded({extended:false}));

servidor.set('view engine','ejs');
servidor.set('views',__dirname+'/views');

servidor.use(express.static(__dirname+'/public'));



servidor.use(require("./routers/routerIndex"))

/*
servidor.get("/",(peticion,respuesta)=>{
    respuesta.render('index');
})
*/
servidor.use(require("./routers/routerRegistrarse"));
/*
servidor.get("/registrarse",(peticion,respuesta)=>{
    respuesta.render('registrarse.ejs');
})*/

servidor.use(require("./routers/routertablastiendas"));
/*
servidor.get("/tablastiendas",(peticion,respuesta)=>{
    respuesta.render('formatoTablasPropietario.ejs');
})
*/


servidor.use(require("./routers/routerestadisticastiendas"));
/*
servidor.get("/estadisticaTienda",(peticion,respuesta)=>{
    respuesta.render('estaditicasTienda.ejs')
})
*/



servidor.use(require("./routers/routeringresotiendas"));
/*
servidor.get("/ingresoALasTiendas",(peticion,respuesta)=>{
    respuesta.render('tiendaIndividualBoceto.ejs')
})
*/

servidor.use(require("./routers/routeragregarproducto"));

/*
servidor.get("/agregarProducto",(peticion,respuesta)=>{
    respuesta.render('agregarProductos.ejs')
})
*/

servidor.use(require("./routers/routercompras"));
/*
servidor.get("/misCompras",(peticion,respuesta)=>{
    respuesta.render('administrarCompras.ejs')
})
*/

servidor.use(require("./routers/routertiendausuario"));

/*
servidor.get("/tiendasVistaUsuario",(peticion,respuesta)=>{
    respuesta.render('tiendasUsuario.ejs')
})
*/


servidor.use(require("./routers/routertablas"));
/*
servidor.get("/tablas",(peticion,respuesta)=>{
    respuesta.render('tablas.ejs');
})
*/

servidor.post("/ingresar",(peticion,respuesta)=>{
    var tipousuario=peticion.body.select;
    if(tipousuario=="opcion-1"){
        respuesta.render("vistapropietario.ejs")
    }
    if(tipousuario=="opcion-2"){
        respuesta.render("vistausuario.ejs")
    }
    console.log(tipousuario);
})





servidor.use(require("./routers/routerVistaPropietario"));
/*
servidor.get("/vistapropietario",(peticion,respuesta)=>{
    respuesta.render('vistapropietario.ejs')
})
*/

servidor.use(require("./routers/routerIniciarSesion"));
/*
servidor.get("/iniciarsesion",(peticion,respuesta)=>{
    respuesta.render('iniciarsesion.ejs')
})
*/
var datos=[
    {
        nombre:"usuario",
        compras:"numero de compras",
        valor:"valor",
    }

];

servidor.use(require("./routers/routerRegistrarTienda"));
/*
servidor.get("/RegistrarTienda",(peticion,respuesta)=>{
    respuesta.render('registroTienda.ejs');
})*/
servidor.listen(3000,()=>{
    console.log("el servidor de merkaweb corre en el puerto 3000")
});

