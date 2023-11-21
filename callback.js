function SoyAsincrona(miCallback){
    console.log('Hola soy Asincrona');
    setTimeout(() => {
        console.log('Estoy siendo Asincrona');
        miCallback();
    }, 1000);
}
console.log('Inciando proceso...');
SoyAsincrona(function(){
    console.log('Terminado proceso...');
});