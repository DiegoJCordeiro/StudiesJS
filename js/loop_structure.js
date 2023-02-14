/**
 * Tipo de estrutura de repetição
 * - while
 * - do while
 * - for
 * 
 * Keywords
 * - break (Interrompe a iteração sobre um laço de repetição).
 * - continue (Pula para a próxima fase da iteração).
 */

let nome = prompt('Qual seu nome ?')

while (true) {

    nome = prompt('Qual seu nome ?')

    if(nome === 'Diego') {
        alert('Acertou, parabéns !')
        break
    }
}

let counter = 0

do {

    sobrenome = prompt('Qual seu sobrenome ?')

    if(sobrenome === 'Jesus Cordeiro') {
        alert('Acertou, parabéns !')
        continue
    }

    counter++
} while(counter < 3);


for(let iter = 0; iter <= 3; iter++) {

    console.log(`O valor do iter é ${iter}`)
}