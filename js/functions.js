/**
 * Tipos de funções
 * - Função.
 * - Váriavel de função.
 * - Função com parametro.
 * - Arrow function
 */

function primeiraFuncao() {

}

const exibeOlaMundo = function() {
    console.log('Olá Mundo !')
}

function exibeNomeNaConsole(nome) {
    console.log(`Seu nome é ${nome}`)
}

const arrowFunction = (numero) => {
    return numero * 2
}

function funcaoComRestOperator(...numeros){
    for(numeroAtual in numeros) {
        console.log(numeroAtual)
    }
}

const arrowFunctionMaisEnxuta = numero => numero * 2