function saludar( nombre ){
    // console.log(arguments);
    // console.log('Hola '+ nombre);
    return [1,2,3,4,5];
    // console.log('Soy un codigo que jamas me voy ejecutar');

}

const saludar2 = function (nombre){
    console.log('Hola '+ nombre);
}

const saludarFlecha = () => { 
    console.log('Hola Flecha');
}


const saludarFlecha2 = ( nombre ) => { 
    console.log('Hola '+ nombre);
}


// const retornoDeSaludar= saludar('Vivianita',40, true, 'Costa Rica');//1
// console.log(retornoDeSaludar [0],retornoDeSaludar[1]);

// saludar2('Vivianita');
// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar (a,b) {
    return a + b ;
}

// const sumar2 = (a,b) => {
//     return a + b
// }
const sumar2 = ( a , b ) => a + b ;
function getAleatorio() {
    return Math.random();
}
const getAleatorio2 = () => Math.random(); 

console.log( getAleatorio2());
