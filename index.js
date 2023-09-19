// let variable = 'soy una variable'
// console.log(variable);
// console.log(variable);
// variable = 1
// variable = true
// const CONSTANTE = 1

// const soyUnArray = [{nombre: "Roxana", edad: 23}, {nombre: "Pedro", edad: 34}, {nombre: 'Julia', edad: 55}]

// console.log(soyUnArray);

// soyUnArray.forEach((persona, indice) => {
//         let indicePlus = indice * 2
//         if(persona.nombre == 'Pedro') persona.apellido = "Rubianes"
//         console.log(indicePlus);
//     })

// soyUnArray.map(registro => registro.nombre.replace)

// console.log(soyUnArray);
// // for (let index = 0; index < soyUnArray.length; index++) {
// //     console.log(soyUnArray[index]);
// // }

// // pedirListadoDeUsuarios('https::/www.buscandousuarios.com/api/usuarios')
// //     .then(estaEsLaRespuestadeUsuario => response.foreach(usuario => console.log(usuario.nombre)))
// //     .catch(error)


// let persona =    {
//     atributo1: "Ana",
//     edad: 12,
//     altura: 1.23,
//     perros: ['stompy', 'cleared', 'worlfy']
// }

// Dada esta lista de precios: [100,120,300,230,320]
// Obtener una nueva lista de precios con impuestos, utilizando map, agregando la tasa 
// de iva del 21%

// const precios = [100,120,300,230,320]

// let preciosMasIva = precios.map(precio => precio * 1.21)

// console.log(preciosMasIva);


// Dada esta lista de comprobantes de notas de crédito 
// [{id:100,descripcion:”prov1”,precio:1000},{id:102,descripcion:”prov2”,precio:1300}]
// Devolver una nueva lista de comprobantes, con el precio con impuesto de iva del 21%

// const comprobantesNotasCredito = [
//     {
//         id:100,
//         descripcion:'prov1',
//         precio:1000
//     },
//     {
//         id:102,
//         descripcion:'prov2',
//         precio:1300
//     }]
// console.log(comprobantesNotasCredito);
// const lista = comprobantesNotasCredito.map(comprobante => {
//     let comprobante1 = {
//         id: comprobante.id,
//         descripcion: comprobante.descripcion,
//         precio: comprobante.precio * 1.21
//     }
//     return comprobante1
// })

// console.log(lista);
// console.log(comprobantesNotasCredito);

// Dada una lista de números, realizar una función que tome dos parámetros, la lista , un 
// numero y que devuelva otra lista con numeros menores al parámetro.

// const numeros = [100,120,300,230,320]

// function numerosMenores(array, numero) {
//     return array.filter(numeroArray => numeroArray < numero)
// }

// console.log(numerosMenores(numeros, 230));
// console.log(numeros);

// Data esta lista de notas de crédito:
// const ncs = [{id:100,descripcion:"prov1",precio:1000},
//  {id:102,descripcion:"prov2",precio:1300},
//  {id:103,descripcion:"prov3",precio:600}];
// Realizar una función que retorne otra lista con las notas de crédito inferiores a un 
// número pasado por parámetro.

// const ncs = [{id:100,descripcion:"prov1",precio:1000},
//  {id:102,descripcion:"prov2",precio:1300},
//  {id:103,descripcion:"prov3",precio:600}];

//  let notasInferiores = (lista, numero) => ncs.filter(nota => nota.precio < numero)

// //  console.log(notasInferiores(ncs, 1500));

//  // DADO EL 
//  const arrayB = [{id: 12,name: 'Jorge'},{id: 13,name: 'Mariana'}]
//  const arrayA = [{id: 12,name: 'Jorge'},{id: 13,name: 'Mariana'},{id: 18,name: 'Juliana'},{id: 24,name: 'Roxana'}]

//  let resultado = arrayB.filter(persona => {
//     let res = arrayA.filter(personaA => personaA.id == persona.id)
//     //console.log(res);
//     return res
//  })

//  function elementosAnoenB(arrayA, arrayB) {
// 	let array = []
//     let llave = true
//     let j = 0
// 	for (let i = 0; i < arrayA.length; i++) {
// 		let id = arrayA[i].id;
//         j = 0
//         llave = true
// 		while (j < arrayB.length && llave) {
// 			if(arrayB[j].id == id){				
//                 llave = false
// 			}
//             j++
// 		}	
//         if(llave){
//             array.push(arrayA[i])  
//         } 
// 	}
// 	return array
//   }
//  console.log(elementosAnoenB(arrayA, arrayB));

const recibos = [
    {numero: 1000, importe: 10000},
    {numero: 1000, importe: 1500},
    {numero: 1001, importe: 2300},
    {numero: 1002, importe: 2100}
    ]

//console.log(recibos.reduce((acumulador, recibo) => acumulador + recibo.importe, 0));

// const numeros = [8,2,78,34,4,6,9,10,12];
// console.log(numeros.sort((a,b) => a-b));
// console.log(recibos.sort((a, b) =>  b.importe - a.importe));

const precios =  [2300,2500,5000,10000,1300]

console.log(precios.map(precio => precio * 1.21)
    .filter(precioConIva => precioConIva > 3000)
    .reduce((acumulador, precio) => acumulador + precio, 0));