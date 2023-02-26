/**
 * 
 * Function Generator
 * - Utiliza o "*" (asteriscos) na frente do nome function.
 *      - Por exemplo, function* nomeDaFuncao().
 * - Utiliza a keyword yield
 *      - Esta keyword tem a funcionalidade de armazenar e coletar o valor da variável em memória.
 * 
 * Muito utilizado para processamento de funções assíncronas.
 */
let contador = Number(0)

function* incrementaContador(){
    
    yield contador++
}

incrementaContador().next().value
incrementaContador().next().value
incrementaContador().next().value
incrementaContador().next().value
incrementaContador().next().value

console.log(contador)