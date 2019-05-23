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

function archivoEscrito(){
    console.log("Se escribio el dato");
}


var contexto = [
    
    {
        titulo: 'Inicio',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend tempus lectus, non venenatis arcu dapibus sit amet. Vestibulum at erat nisl. Vivamus ac quam dui. In hac habitasse platea dictumst. Curabitur vel enim ipsum. Maecenas vel eros quis mi ornare rhoncus eu sed augue. Fusce eget ante placerat, tempus erat vel, malesuada elit. Sed interdum sapien id diam mollis lobortis. Pellentesque non est at sem accumsan maximus vitae quis enim.',
        layout: false
    },
    
    {
        titulo: 'Sobre Nosotros',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend tempus lectus, non venenatis arcu dapibus sit amet. Vestibulum at erat nisl. Vivamus ac quam dui. In hac habitasse platea dictumst. Curabitur vel enim ipsum. Maecenas vel eros quis mi ornare rhoncus eu sed augue. Fusce eget ante placerat, tempus erat vel, malesuada elit. Sed interdum sapien id diam mollis lobortis. Pellentesque non est at sem accumsan maximus vitae quis enim.',
        layout: false
    },
    
    {
        titulo: 'Contacto',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend tempus lectus, non venenatis arcu dapibus sit amet. Vestibulum at erat nisl. Vivamus ac quam dui. In hac habitasse platea dictumst. Curabitur vel enim ipsum. Maecenas vel eros quis mi ornare rhoncus eu sed augue. Fusce eget ante placerat, tempus erat vel, malesuada elit. Sed interdum sapien id diam mollis lobortis. Pellentesque non est at sem accumsan maximus vitae quis enim.',
        layout: false
    },

    {
        titulo: 'Administrador',
        layout: false
    }
    
]

//Ruta inicial
app.get('/inicio', function(req, res) {


    fs.appendFileSync('datos.txt','Pagina visitada: Inicio - Fecha:' +new Date()+'\n','utf8',{'flags':'a+'});
    
    res.render('molde',contexto[0]);
    
});

//Ruta sobre nosotros
app.get('/sobre', function(req, res) {

    fs.appendFileSync('datos.txt','Pagina visitada: Sobre - Fecha:' +new Date()+'\n','utf8',{'flags':'a+'});
    
    res.render('molde',contexto[1]);
    
});

//Ruta de contacto
app.get('/contacto', function(req, res) {

    fs.appendFileSync('datos.txt','Pagina visitada: Contacto - Fecha:' +new Date()+'\n','utf8',{'flags':'a+'});
    
    res.render('molde',contexto[2]);
    
});

//Ruta de administrador
app.get('/admin', function(req, res) {
    
    res.render('admin',contexto[3]);
    
});

//Servidor creado
app.listen(3000, function() {
    console.log('Funciona! Escuchando el puerto 3000!');
});
