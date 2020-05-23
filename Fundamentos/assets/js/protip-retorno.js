// function crearPersona( nombre, apellido){
//     return {nombre,apellido}
// }



const crearPersona = ( nombre, apellido ) => ({nombre,apellido})
const persona = crearPersona('Vivianita', 'Ortiz');
console.log( persona );

function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = (edad,...args) => {
    // console.log( args );
    return args 
}

imprimeArgumentos(10,true,false,'Jose','hola');
const [casado,vivo,nombre,saludo] = imprimeArgumentos2(10,true,false,'Jose','hola');
console.log({casado,vivo,nombre,saludo});
const { apellido: nuevoApellido} = crearPersona('fernando','herrera');
console.log({ nuevoApellido});


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes:['Mark I', 'Mark V', 'Hulkbuste'],   
};

// const imprimePropiedades = ( personaje )=> {
//     console.log ('nombre', personaje.nombre);
//     console.log ('codeName', personaje.codeName);
//     console.log ('vivo', personaje.vivo);
//     console.log ('edad', personaje.edad);
//     console.log ('trajes', personaje.trajes);
// }


const imprimePropiedades = ( {nombre,codeName,vivo,edad = 15 ,trajes} ) => {
    console.log ({nombre});
    console.log ({codeName});
    console.log ({vivo});
    console.log ({edad});
    console.log ({trajes})
}

imprimePropiedades( tony ) ;







