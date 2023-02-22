/**
 * 
 * Debug
 * - console.log
 * - debugger
 * - sempre apague depois de depurar seu script.
 * 
 * Utilizamos quando desejamos depurar nosso código com objetivo de entender melhor nosso código.
 */

let primeiroNumero = 10
let segundoNumero  = 20

let mensagemDeRetorno = ''

console.log(`Primeiro Numero é ${primeiroNumero}.`)
console.log(`Segundo Numero é ${segundoNumero}`)

if(primeiroNumero > segundoNumero) {
    console.log(`Entrou no if.`)
    mensagemDeRetorno = 'Primeiro numero é maior que o segundo.'
} else {
    console.log(`Entrou no else.`)
    mensagemDeRetorno = 'Segundo numero é maior que o primeiro.'
}

debugger

alert(mensagemDeRetorno)