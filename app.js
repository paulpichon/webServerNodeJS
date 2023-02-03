//express
const express = require('express')
//HBS para los partials
const hbs = require('hbs');

const app = express()
const port = 8080;

//handlebar
//renderizacion con handlebars HBS
app.set('view engine', 'hbs');
//partials
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use( express.static('public') );


app.get('/', (req, res) => {
    //renderizar la pagina/respuesta -> handlebars HBS
    //mandar argumentos/opciones, estos se pueden usar en el HTML de la pagina a la que pertenece
    res.render('home', {
        nombre: 'Paúl Pichón',
        titulo: 'Curso de Node'
    });
});
//
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Paúl Pichón',
        titulo: 'Curso de Node'
    });
});



app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Paúl Pichón',
        titulo: 'Curso de Node'
    });
});
//*comodin, cualquier otra ruta que no sea las de arriba llegara aqui
app.get('*', (req, res) => {
    //se puede poner un path para mostra alguna pagina
    //sendFile
    //__dirname para componer el path completo
    //res.sendFile( __dirname + '/views/404.hbs');
    res.render('404', {
        nombre: 'Paúl Pichón',
        titulo: 'Curso de Node'
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})