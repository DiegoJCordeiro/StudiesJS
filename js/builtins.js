/**
 * Funções Built-in
 * - prompt (Popup para entrada de dados).
 * - alert (Popup para exibição de dados).
 * - console.log (Exibição de log no console do navegador). 
 * - Math.max  (Retorna o maior numero).
 * - Math.min  (Retorna o menor numero).
 * - Math.roud (Arredonda um determinado valor).
 * 
 * Funções Built-ins são funções pré embutidas no Javascript.
 * Onde não precisamos importar nada para utilizá-las.
 */
let nome = prompt('Qual seu nome ?')
alert(`Seu nome é ${nome}`)

console.log(`Seu nome é:  ${nome}`)

let numeroMaior = Math.max(1,2,3,4,5)
console.log(numeroMaior)

let numeroMenor = Math.min(1,2,3,4,5)
console.log(numeroMenor)

let numeroArredondado = Math.round(5.677777779)
console.log(numeroArredondado)