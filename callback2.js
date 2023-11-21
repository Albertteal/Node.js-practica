function hola(nombre, miCallback){
    console.log('hola, ' + nombre);
    setTimeout(() => {
        console.log('Estoy siendo Asincrona');
        miCallback();
    }, 1000);
}
console.log('Inciando proceso...');
hola('Albert', function(){
    console.log('Terminado proceso...');
});