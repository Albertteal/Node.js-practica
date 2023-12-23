function SoyAsincrona(){
    console.log('Hola, soy una funcion asincrona');
    setTimeout(function() {
        console.log('Estoy siendo asincrona por primera vez');
    }, 500);
    setTimeout(function() {
        console.log('Estoy siendo asincrona por segunda vez');
    }, 1000);
}

console.log('Iniciando proceso...');
SoyAsincrona();
console.log('Terminando proceso...');