
// console.log('Hola Mundo');
alert('Hola Desde app.js');


let a = 10,
    b = 10,
    c = 'Hola ',
    d = 'spiderman',
    x = a * b ;

const saludo = c + d;

console.warn({a});
console.error({b});
console.info('%c Mis Variables', 'color:blue; font-weight:bold');
console.log('x',x);

c = 'hola de nuevo';

console.table({a, b, c, d, x})