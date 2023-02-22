/**
 * 
 * Tipo Array
 * - Armazena conjunto de dados.
 * 
 * Muito utilizado para armazenar diversos dados.
 */

let arrayDeNumeros = [1,2,3,4,5]
let arrayDeBooleanos = [true, true, false, true, false]
let arrayDeStrings = ['Matheus', 'Gabriel', 'Tiago', 'Pedro', 'Saul']

console.log(`Primeiro indice do array de números ${arrayDeNumeros[0]}`)
console.log(`Segundo indice do array de booleanos ${arrayDeBooleanos[1]}`)
console.log(`Terceiro indice do array de strings ${arrayDeStrings[2]}`)

// ----------------->>>>>Métodos de arrays<<<<<-----------------

let stringRemovida = arrayDeStrings.pop()  // Deleta  o ultimo elemento de uma lista.

console.log(`A String removida é [${stringRemovida}]`)
console.log(`Array de Strings está assim agora [${arrayDeStrings}]`)

arrayDeStrings.push('Marcos')  // Adiciona o elemento na ultima posiÇão de uma lista.

console.log(`String adicionada ao arrayDeStrings [${arrayDeStrings}]`)

let numeroRemovido = arrayDeNumeros.shift()  // Deleta o primeiro elemento de uma lista.

console.log(`O número removido é [${numeroRemovido}]`)
console.log(`Array de Números está assim agora [${arrayDeStrings}]`)

arrayDeNumeros.unshift(0, 1)  // Adiciona o elemento na primeira posição de uma lista.

console.log(`Numeros 0 e 1 adicionados ao arrayDeNumeros [${arrayDeStrings}]`)

let indicePrimeiroElementoTrue = arrayDeBooleanos.indexOf(true)  // Encontra o primeiro indice do elemento desejado.

console.log(`O primeiro indice encontrado para o valor [true] é ${indicePrimeiroElementoTrue}`)

let indiceUltimoElementoTrue = arrayDeBooleanos.lastIndexOf(true)  // Encontra o ultimo indice do elemento desejado.

console.log(`O primeiro indice encontrado para o valor [true] é ${indiceUltimoElementoTrue}`)

let existeNomeMateusNoArray = arrayDeStrings.includes('Matheus')  // Verifica se existe o elemento desejado dentro do array.

console.log(`O nome Matheus existe no array de strings ${existeNomeMateusNoArray ? 'Sim.' : 'Não.'}`)

let arrayReverso = arrayDeStrings.reverse()  // Inverte a lista de valores.

console.log(`Lista reversa ${arrayReverso}`)

let stringDeElementosUnidosPorVirgula = arrayReverso.join(', ')  // Faz a junção de elementos por vírgula.

console.log(`Elementos de uma lista unidos por vírgula ${stringDeElementosUnidosPorVirgula}`)

const [primeiroNumeroDesempacotado, segundoNumeroDesempacotado, terceiroNumeroDesempacotado] = arrayDeNumeros  // Muito conhecido como Destructuring ( Ou desestrutura).

console.log("Primeiro Numero Desempacotado: " + primeiroNumeroDesempacotado)
console.log("Segundo Numero Desempacotado: " + segundoNumeroDesempacotado)
console.log("Terceiro Numero Desempacotado: " + terceiroNumeroDesempacotado)

// ----------------->>>>>Métodos de iteração do array<<<<<-----------------

arrayDeNumeros.forEach( indice => {
    console.log(`O indice atual é ${indice}`)
})