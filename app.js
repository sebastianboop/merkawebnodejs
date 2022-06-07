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

servidor.get("/iniciarsesion",(peticion,respuesta)=>{
    respuesta.render('iniciarsesion.ejs')
})
servidor.listen(3000,()=>{
    console.log("el servidor de merkaweb corre en el puerto 3000")
});