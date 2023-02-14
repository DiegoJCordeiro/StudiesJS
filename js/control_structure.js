/**
 * Estrutura de controle
 * - if, else if, else.
 * - switch.
 */
let nome = prompt('Qual seu nome ?')

if(nome === 'Diego') {
    console.log(`Seu nome é lindo ${nome} !`)
} else if(nome === 'Mayra') {
    console.log(`Seu nome é lindo ${nome} !`)
} else {
    console.log(`Seu nome é normal ${nome}`)
}

switch(nome.toLocaleLowerCase()){
    case 'diego':
        console.log(`Seu nome é lindo ${nome} !`)
        break
    case 'mayra':
        console.log(`Seu nome é lindo ${nome} !`)
        break
    default:
        console.log(`Seu nome é normal ${nome} !`)
        break
}