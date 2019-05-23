//Grupo: Maria AlejandrA Renjifo y Juan Sebastian Gil

//Importar librerias
var express = require('express');
var app = express();
var motorRender= require('express-handlebars');
const fs= require('fs');

//Carpeta public como estatica
app.use(express.static('public'));

//Motor de render
app.engine('handlebars',motorRender());
app.set('view engine','handlebars');


//Ruta inicial
app.get('/', function(req, res) {
    res.send('<h1>Hola Mundo!</h1>');
    
 });

//Servidor creado
app.listen(3000, function() {
    console.log('Funciona! Escuchando el puerto 3000!');
});
