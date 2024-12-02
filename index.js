//PROTOCOLO DE INTERCAMBIO
var http=require('http');
var server=http.createServer();

//SERVICIO WEB
function mensaje(req,resp){
    //ESTADO 200->SATISFACTORIO / MENSAJE DE TIPO TEXTO PLANO
    resp.writeHead(200,{'content-type':'text/plain'});
    //MENSAJE
    resp.write('HOLA MUNDO');
    //FINALIZAR COMUNICACIÓN
    resp.end();
}
server.on('request',mensaje);
            //Puerto
            //   |
            //  \/
server.listen(3000,function(){
    console.log("La solicitud fu realizada mediante 3000");
});