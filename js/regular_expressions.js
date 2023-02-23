/**
 * 
 * Regex
 * - Pode ser instanciada de duas formas
 *      - Através de duas /.../
 *      - Ou com a classe RegExp().
 *      - Para executar basta chamar o método .test();
 * - [] -> Colchetes significa "conjunto" de dados.
 *      - Se quisermos validar se existe numero de 0 a 9 em uma String
 *      - Podemos colocá-los dentro dos colchetes [0-9] separando por traço.
 * - {} -> Chaves significa "precisão" de conjuntos.
 *      - Vamos supor que você deseja uma sequência de três digitos numéricos 0 a 9.
 *      - Podemos fazer o seguinte [0-9]{3}. 
 * - Caractecteres Especiais para Regex
 *      - \w -> Aceita qualquer caractere alfanumérico.
 *      - \d -> Aceita qualquer digito de 0 a 9.
 *      - \s -> Aceita qualquer caractere de espaco em branco.
 *      - \W -> Não aceita Qualquer caractere alfanumérico.
 *      - \D -> Não aceita qualquer digito de 0 a 9.
 *      - \S -> Não aceita qualquer caractere de espaco em branco.
 *      - .  -> Aceita qualquer caractere, menos quebra de linha.
 * - Operadores
 *      - ^  -> Negação
 *      - +  -> Repetição
 *      - ?  -> Opcional
 * - Métodos utilizados
 *      - new RegExp(regex).test(valor) -> Retorna um valor booleano, dizendo se funcionou ou não. 
 *      - new RegExp(regex).exec(valor) -> Retorna um objeto, com algumas informações da validação feita. Caso não esteja aderente, ele retorna null. 
 *      - ''.match(regex)               -> Retorna o mesmo objeto que o método exec. A única diferença é que a chamada do método é através de uma string.
 * - Choice Pattern
 *      - () -> Parenteses é como se abríssemos uma condição.
 *      - | -> Pipe significa "or".
 *      - Então, supomos que desejamos aceitar apenas 3 nomes Joao, Jose e Maria.
 *      - E ambos devem conter seu numero na lista de chamada antes do nome, exemplo "3:Maria".
 *      - Podemos fazer da seguinte forma /\d:(Joao|Jose|Maria)/ 
*/
"use strict"

let regexComClasse = new RegExp('Regex.')
let regexComBarra = /Regex/


console.log('1 -> ' + regexComClasse.test('Tem Regex Na String'))
console.log('2 -> ' + regexComBarra.test('Nao tem o Pattern Na String'))

let validaSeHaNumerosNaFrase = new RegExp('[0-9]')
let fraseComNumeros = 'Tem 1 numero nesta frase.'
let fraseSemNumeros = 'Nao tem um numero nesta frase.'

console.log('3 -> ' + validaSeHaNumerosNaFrase.test(fraseComNumeros))
console.log('4 -> ' + validaSeHaNumerosNaFrase.test(fraseSemNumeros))

let regexParaAceitarCaractereAlfaNumerico = new RegExp('\w')
let regexParaAceitarDigitosNumericos = new RegExp('\d')
let regexParaAceitarEspacosEmBranco = new RegExp('\s')

console.log('5 -> ' + regexParaAceitarCaractereAlfaNumerico.test('dadsdadasda'))
console.log('6 -> ' + regexParaAceitarCaractereAlfaNumerico.test('dadsdadasda fsds sfdss'))
console.log('7 -> ' + regexParaAceitarDigitosNumericos.test('123456789'))
console.log('8 -> ' + regexParaAceitarDigitosNumericos.test('dadsdadasda'))
console.log('9 -> ' + regexParaAceitarEspacosEmBranco.test('dads dada sda'))
console.log('10 -> ' + regexParaAceitarEspacosEmBranco.test('dadsdadasda'))

let regexParaNaoAceitarCaractereAlfaNumerico = new RegExp('\W')
let regexParaNaoAceitarDigitosNumericos = new RegExp('\D')
let regexParaNaoAceitarEspacosEmBranco = new RegExp('\S')

console.log('11 -> ' + regexParaNaoAceitarCaractereAlfaNumerico.test('dadsdadasda'))
console.log('12 -> ' + regexParaNaoAceitarCaractereAlfaNumerico.test('dadsdadasda fsds sfdss'))
console.log('13 -> ' + regexParaNaoAceitarDigitosNumericos.test('123456789'))
console.log('14 -> ' + regexParaNaoAceitarDigitosNumericos.test('dadsdadasda'))
console.log('15 -> ' + regexParaNaoAceitarEspacosEmBranco.test('dads dada sda'))
console.log('16 -> ' + regexParaNaoAceitarEspacosEmBranco.test('dadsdadasda'))

let regexComOperadorDeNegacao = /^[0-9]/
let regexComOperadorDeRepeticao = /\d+/
let regexComOperadorOpcional = /\d?\w/

console.log('17 -> ' + regexComOperadorDeNegacao.test('123'))
console.log('18 -> ' + regexComOperadorDeNegacao.test('dsadasd'))
console.log('19 -> ' + regexComOperadorDeRepeticao.test('12345'))
console.log('20 -> ' + regexComOperadorDeRepeticao.test('dads dada sda'))
console.log('21 -> ' + regexComOperadorOpcional.test('adsadas'))
console.log('22 -> ' + regexComOperadorOpcional.test(' '))

let regexComPrecisao = /\d{3,4}-\w{4}/

console.log('23 -> ' + regexComPrecisao.test('1231-dsas'))
console.log('24 -> ' + regexComPrecisao.test('123'))

let regexComChoicePattern = /\d:(Joao|Jose|Maria)/

console.log('25 -> ' + regexComChoicePattern.test('1:Maria'))
console.log('26 -> ' + regexComChoicePattern.test('2:Diego'))

let regexDeValidacaoDeDominioComRegExp = new RegExp('www.[(a-z|A-Z)][(.com.br|.br)]')
let regexDeValidacaoDeDominioSemRegExp = /www.\w+\.(com.br|br)/

console.log('27 -> ' + regexDeValidacaoDeDominioComRegExp.test('www.google.com.br'))
console.log('28 -> ' + regexDeValidacaoDeDominioSemRegExp.test('www.google.uk'))