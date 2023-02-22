/**
 * Tipo de escopos
 * - Global
 * - Função
 * - Bloco
 * 
 * Os escopos nos permite declarar e utilizar váriaveis de forma declarativa 
 * em blocos divergentes.
 */
let variavel = 10  // Váriavel de escopo Global.

function escopoDeFuncao() {

    let variavel = 5  // Variável de escopo de função.

    if(variavel == 5){
        let variavel = 1  // Variável de escopo de bloco.
    }

    console.log(variavel)
}

escopoDeFuncao()

console.log(variavel)