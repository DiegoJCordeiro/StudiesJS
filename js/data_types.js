/**
 * Tipo de dado
 * - number
 * 
 * Operadores aritméticos para (number)
 * 
 * +, -, *, / e %
 * 
 * Números especiais ou Special numbers
 * - NaN
 * - Infinity
 */
let numero = 10

console.log('Tipo number (Váriavel numero): ' + typeof numero)
console.log('Tipo special number (NaN): ' + typeof NaN)
console.log('Tipo special number (Infinity): ' + typeof Infinity)

/**
 * Tipo de dado
 * - string
 * 
 * Formas de declaração
 * - Aspas duplas " ".
 * - Aspas simples ' '.
 * - Crase ``.
 * 
 * Muito utilizado para descrever palavras.
 */
let palavra_com_aspas_simples = 'Aspas Simples'
let palavra_com_aspas_duplas = "Aspas Duplas"
let palavra_com_crase = `Crase juntou-se com string de ${palavra_com_aspas_simples}`

console.log('String com aspas simples: ' + palavra_com_aspas_simples)
console.log("String com aspas duplas: " + palavra_com_aspas_duplas)
console.log('String com crase: ' + palavra_com_crase)
console.log('+++ \n')

/**
 * Tipo de dado
 * - boolean
 * 
 * Operadores lógicos para boolean
 * - Maior >.
 * - Menor <.
 * - Maior ou Igual >=.
 * - Menor ou Igual <=.
 * - Diferente !=.
 * - Somente os valores sãp iguais, independente do tipo ==.
 * - Idêntico. Valores e tipos são os mesmos ===.
 * 
 * Muito utilizado para comparações Verdadeiro / Falso.
 */
let booleano = true

console.log('Booleano: ' + typeof booleano)
console.log('+++ \n')

/**
 * Tipo de dado
 * - empty values
 * 
 * Muito utilizado para exemplificar valores inexistentes null / undefined.
 */
let empty_value_null = null
let empty_value_undefined = undefined

console.log('Empty values "null": ' + typeof empty_value_null)
console.log('Empty values "undefined": ' + typeof empty_value_undefined)