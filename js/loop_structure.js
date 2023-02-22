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

let nomes = ['Diego', 'Mayra', 'Davi Lucca']

for(let iter = 0; iter <= nomes['length']; iter++) {

    console.log(`O nome iterado é ${nomes[iter]}`)
}