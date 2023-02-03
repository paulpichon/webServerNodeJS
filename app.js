const express = require('express')
const app = express()
const port = 8080;

app.get('/', (req, res) => {
  res.send('HOME')
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo')
});
//*comodin, cualquier otra ruta que no sea las de arriba llegara aqui
app.get('*', (req, res) => {
    res.send('404 | Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })