function hola(nombre, miCallback){
    setTimeout(function ()  {
        console.log('Hola, ' + nombre);
        miCallback();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function ()  {
        console.log('adios, ' +  nombre);
        otroCallback();
    }, 1000);
}
console.log('Inciando proceso...');
hola('Albert', function(){
    adios('Albert', function(){
        console.log('Terminado proceso...');
    });
});