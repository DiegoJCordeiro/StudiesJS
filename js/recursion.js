
function recursao(numero=5) {
    if (numero % 2 == 0) {
        console.log(`O numero ${numero} é par.`)
    } else {
        recursao(numero--)
    }
}

recursao(15)