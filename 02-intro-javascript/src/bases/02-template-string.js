

const nombre = 'Kevin'; 

const apellido = 'Guzmán';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(n) {
    return `Hola ${n}`;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)