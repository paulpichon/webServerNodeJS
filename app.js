const express = require('express')
const app = express()
const port = 8080;

//renderizacion con handlebars HBS
app.set('view engine', 'hbs');

//TODO: require('hbs');

//servir contenido estatico
app.use( express.static('public') );


app.get('/', (req, res) => {
    //renderizar la pagina/respuesta -> handlebars HBS
    res.render('home');
});
//
app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html');
});
app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html');
});
//*comodin, cualquier otra ruta que no sea las de arriba llegara aqui
app.get('*', (req, res) => {
    //se puede poner un path para mostra alguna pagina
    //sendFile
    //__dirname para componer el path completo
    res.sendFile( __dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})