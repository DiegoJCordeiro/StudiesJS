/**
 * Tipos JSON
 * - JavaScript Object Notation.
 * 
 * Muito utilizado para comunicação entre aplicações (Integração).
 */


let objetoJSON = {
    'nome': 'Objeto',
    'servePara': 'Passagem de informação entre APIs'
}

let jsonParaString = JSON.stringify(objetoJSON)

console.log(jsonParaString)

let stringParaJson = JSON.parse(jsonParaString)

console.log(stringParaJson)