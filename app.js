
//construir un servidor
const http = require('http');

http.createServer( (req, res) => {

    //console.log( req );
    //res.writeHead( 200, { 'Content-Type': 'application/json'} );
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv' );
    res.writeHead( 200, { 'Content-Type': 'application/csv'} );

    res.write( 'id, nombre\n' );
    res.write( '1, Magaly\n' );
    res.write( '2, Julieta\n' );
    res.write( '3, Ariadna\n' );
    res.write( '4, Jessica\n' );
    //terminar respuesta
    res.end();

})
.listen( 8080 );

console.log( 'Escuchando el puerto', 8080 );