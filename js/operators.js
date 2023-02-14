/**
 * Operadores aritméticos para number
 * 
 * - Soma +.
 * - Subtração -.
 * - Divisão /.
 * - Multiplicação *.
 * - Módulo %.
 */
console.log('Soma: ' + 10 + 2)
console.log('Subtracao: ' + 10 - 1)
console.log('Multiplicacao: ' + 10 * 2)
console.log('Divisao: ' + 10 / 2)
console.log('Módulo: ' + 10 % 2)
console.log('+++ \n')

/**
 * Operadores lógicos para boolean
 * - Maior >.
 * - Menor <.
 * - Maior ou Igual >=.
 * - Menor ou Igual <=.
 * - Diferente !=.
 * - && e.
 * - || ou.
 * - ! not.
 * - Somente os valores sãp iguais, independente do tipo ==.
 * - Idêntico. Valores e tipos são os mesmos ===.
 * - Ternário true ? 'Verdadeiro' : 'Falso'
 */
console.log("Operador lógico 3 == '3' " + ( 3 == '3'))
console.log("Operador lógico 3 === 3  " + ( 3 === 3))
console.log("Operador lógico 4 > 3  " + ( 4 > 3))
console.log("Operador lógico 4 < 3  " + ( 4 < 3))
console.log("Operador lógico 4 >= 3  " + ( 4 <= 3))
console.log("Operador lógico 4 <= 3  " + ( 4 >= 3))
console.log("Operador lógico 4 != 3  " + ( 4 != 3))
console.log("Operador lógico  (4 != 3 ou 3 == 4) " + ( 4 != 3 || 3 == 4))
console.log("Operador lógico  (4 != 3 e 3 == 4) " + ( 4 != 3 && 3 == 4))
console.log("Operador lógico !(4 != 3 e 3 == 4) " + !( 4 != 3 && 3 == 4))
console.log("Operador ternário: true ? 'Verdadeiro' : 'Falso' " + true ? 'Verdadeiro' : 'Falso')