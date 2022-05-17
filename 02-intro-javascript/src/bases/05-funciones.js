

function saludar(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 =  (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 =  (nombre) => `Hola, ${nombre}`;

const getUser = () => {
    return {
        uid: 'Kevin',
        username: '1234'
    }
}

console.log(saludar3('Kevin'))
console.log(getUser())


const getUsuarioActivo = (nombre) =>({
        uid: '123',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Kevin');
console.log(usuarioActivo);