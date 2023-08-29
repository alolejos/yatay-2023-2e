let variable = 'soy una variable'
console.log(variable);
console.log(variable);
variable = 1
variable = true
const CONSTANTE = 1

const soyUnArray = [{nombre: "Roxana", edad: 23}, {nombre: "Pedro", edad: 34}, {nombre: 'Julia', edad: 55}]

console.log(soyUnArray);

soyUnArray.forEach((persona, indice) => {
        let indicePlus = indice * 2
        if(persona.nombre == 'Pedro') persona.apellido = "Rubianes"
        console.log(indicePlus);
    })

soyUnArray.map(registro => registro.nombre.replace)

console.log(soyUnArray);
// for (let index = 0; index < soyUnArray.length; index++) {
//     console.log(soyUnArray[index]);
// }

// pedirListadoDeUsuarios('https::/www.buscandousuarios.com/api/usuarios')
//     .then(estaEsLaRespuestadeUsuario => response.foreach(usuario => console.log(usuario.nombre)))
//     .catch(error)


let persona =    {
    atributo1: "Ana",
    edad: 12,
    altura: 1.23,
    perros: ['stompy', 'cleared', 'worlfy']
}

