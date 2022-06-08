const express= require('express');
const bodyparser=require('body-parser');

const servidor=express();



servidor.use(bodyparser.json());
servidor.use(bodyparser.urlencoded({extended:false}));

servidor.set('view engine','ejs');
servidor.set('views',__dirname+'/views');

servidor.use(express.static(__dirname+'/public'));

servidor.get("/",(peticion,respuesta)=>{
    respuesta.render('index');
})
servidor.get("/registrarse",(peticion,respuesta)=>{
    respuesta.render('registrarse.ejs');
})
servidor.post("/ingresar",(peticion,respuesta)=>{
    var tipousuario=peticion.body.select;
    if(tipousuario=="opcion-1"){
        respuesta.render("vistatienda.ejs")
    }
    if(tipousuario=="opcion-2"){
        respuesta.render("vistausuario.ejs")
    }
    console.log(tipousuario);
})
servidor.get("/iniciarsesion",(peticion,respuesta)=>{
    respuesta.render('iniciarsesion.ejs')
})
var datos=[
    {
        nombre:"usuario",
        compras:"numero de compras",
        valor:"valor",
    }

];
servidor.get("/ventas",(peticion,respuesta)=>{
    respuesta.send({lista:datos});
})
servidor.listen(3000,()=>{
    console.log("el servidor de merkaweb corre en el puerto 3000")
});

