/**
 * 
 * Funções Closures
 * - Utilizadas para privar a visibilidade de outra função.
 */


/**
 * @function exibeNomeAgregaProfissao
 * @param {string} nome 
 * @returns {string}
 */
function exibeNomeAgregaProfissao(nome="Sem Nome") {
    return function(profissao="Desenvolvedor") {
        return nome + " " + profissao
    }
}

nomeMaisProfissao = exibeNomeAgregaProfissao("Diego Cordeiro")

console.log(nomeMaisProfissao)