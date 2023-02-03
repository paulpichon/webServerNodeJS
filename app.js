const express = require('express')
const app = express()
const port = 8080;

//middelware
//servir contenido estatico
app.use( express.static('public') );

//
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo')
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