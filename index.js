//Grupo: Maria Alejandra Renjifo y Juan Sebastian Gil

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
        descripcion: 'La Universidad Icesi forma profesionales en 28 programas de pregrado, 1 doctorado, 24 maestrías, 21 especializaciones médico-quirúrgicas y 15 especializaciones, todos ellos aprobados por el Ministerio de Educación Nacional. Además, gracias al estrecho vínculo con las empresas, se diseñan diplomados y programas a la medida de cada organización que satisfacen sus necesidades de actualización, ofreciéndole también asesoría y consultoría.',
        layout: false
    },
    
    {
        titulo: 'Sobre Nosotros',
        descripcion: 'El campus de 141.334 metros cuadrados está compuesto por 18 edificios con aulas dotadas con equipos de última tecnología y aire acondicionado para el óptimo desarrollo de las actividades académicas y de investigación. Entre ellos, el Edificio L, dotado con Laboratorios claves para las carreras de Medicina, Química, Biología, Ingeniería Bioquímica y Química Farmacéutica. El último, es el Edificio E, de cinco pisos con 4.300 m2, ubicado al lado del Edificio D y Bienestar Universitario, que cuenta con 33 salones de clases para 40 alumnos por aula; un auditorio para 77 personas, una sala de audiencias ubicada en el segundo piso; dos aulas especiales en primer piso para 43 personas cada una y ocho aulas grupales.',
        layout: false
    },
    
    {
        titulo: 'Contacto',
        descripcion: 'En el 2015, el Ministerio de Educación Nacional otorgó la renovación de la Acreditación Institucional de Alta Calidad, hasta el 2021, “recibimos con orgullo esta renovación de la Acreditación Institucional de Alta Calidad, pues es un reconocimiento al compromiso permanente de Icesi con la región y el país, de mantener altos estándares de calidad en el desarrollo de las funciones de formación, investigación y extensión social, así como en las labores de apoyo administrativo”, comenta Francisco Piedrahita, rector de la Universidad Icesi.',
        layout: false
    },

    
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

    var items;
    var nombres = [];
    var contInicio=0;
    var contSobre=0;
    var contContacto=0;

    fs.readFile('datos.txt','utf8',function(err,data){

        if(err) throw err;
        var lines = data.split('\n');
        
        lines.forEach(function(line){
            items=line.split(' ');
            nombres.push(items[2]);

        });

        console.log(nombres);

        nombres.forEach(function(nom){

            if(nom == "Inicio"){
                contInicio++;
            }

            if(nom == "Sobre"){
                contSobre++;
            }

            if(nom == "Contacto"){
                contContacto++;
            }
            
        
        });

        console.log("Inicio: "+contInicio+" Sobre: "+contSobre+" Contacto: "+contContacto);

        var contextoAdmin={
            layout: false,
            titulo: 'Administrador',
            contInicio: contInicio,
            contSobre: contSobre,
            contContacto: contContacto

        };

        res.render('admin',contextoAdmin);

    }); 
    
   
    
});



//Servidor creado
app.listen(3000, function() {
    console.log('Funciona! Escuchando el puerto 3000!');
});
