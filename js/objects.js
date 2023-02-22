/**
 * 
 * Object
 * - Molde de representação.
 * - Criado a partir { }.
 * - Prototype ( Protótipo do objeto criado ).
 * 
 * Muito utilizado para representar algo tangível em forma de código.
 */
let pessoa = {
    primeiroNome: "Diego",
    ultimoNome:"Cordeiro",
    idade: 28,
    nomeCompleto: function() {
        
        if (this.primeiroNome === undefined){
            return this.nome
        }

        return this.primeiroNome + " " + this.ultimoNome
    }
}

let notaEscolar = {
    serie: "5A",
    notaTotal: 10
}

function exibirNomeCompletoDaPessoa() {
        console.log(pessoa)

        nomeCompleto= pessoa.nomeCompleto()

        delete pessoa.primeiroNome
        delete pessoa.ultimoNome

        pessoa.nome = nomeCompleto

        console.log(pessoa)
}

exibirNomeCompletoDaPessoa()

function copiaMaterialEscolarParaDentroDePessoa() {
    
    Object.assign(pessoa, notaEscolar)
    console.log(pessoa)
}

copiaMaterialEscolarParaDentroDePessoa()


function desempacotaCamposDeObjetos() {
    const {"notaTotal": total, "serie": sala} = notaEscolar

    console.log(`A nota escolar desempacotada é: ${total}`)
    console.log(`A serie desempacotada é: ${sala}`)
}

desempacotaCamposDeObjetos()

console.log(Object.keys(pessoa))  // Iterando sobre as keys de objeto.