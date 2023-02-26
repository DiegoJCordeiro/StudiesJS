/**
 * 
 * Promises
 * - São ações de promessa assícronas do Javascript.
 * 
 * Métodos
 * - resolve(action) -> Resolve, ou executa, determinada ação.
 * - then(arrowFunction) -> Obtem o valor da execução do método resolve.
 *      - Podemos encadear um método then(arrowFunction) atrás do outro.
 * - catch(arrowFunction) -> Captura o erro ocorrido na execução do promise.
 *      - Sempre adicionado após o método then(arrowFunction).
 * - reject(error) -> Utilizado para rejeitar uma resolução de promise.
 * - all(array) -> Permite executar várias promises em uma única vez.
 * 
 * Muito utlizado para fazer requisição a outras API's.
 */
'use strict'

function primeiroContatoComPromise(sequence, numero) {

    console.log(`${sequence} -> Código antes da resolução da promise.`)
    
    let promise = Promise.resolve(numero + 2)
    
    console.log(`${sequence} -> Código após a resolução da promise.`)
    
    promise.then((value) => console.log(`${sequence} -> Resposta da Promise: ${value}`))
    
    console.log(`${sequence} -> Código após o processamento da resposta da promise.`)
}

function utilizaPromiseComCatch(sequence, numero) {
    
    console.log(`${sequence} -> Código antes da resolução da promise.`)
    
    let promise = Promise.resolve(numero + 2)
    
    console.log(`${sequence} -> Código após a resolução da promise.`)
    
    promise.then((value) => console.log(`${sequence} -> Resposta da Promise: ${value}`))
        .catch(reason => console.error(`${sequence} -> ${reason}`))
    
    console.log(`${sequence} -> Código após o processamento da resposta da promise.`)
}

function utilizaPromiseComReject(sequence, numero) {

    console.log(`${sequence} -> Código antes da resolução da promise.`)
    
    new Promise((resolve, reject) => {
        
        if(numero > 0) {
            resolve(console.log(`${sequence} ->  Resposta da Promise: ${numero + 2}`))
        } else {
            reject(new Error(`${sequence} ->  O número é menor ou igual a zero.`))
        }
    })

    console.log(`${sequence} ->  Código após o processamento da resposta da promise.`)
}

function executaVariasPromises() {

    let promises = []

    let firstPromise = new Promise((resolve, reject) => {
        let resp = fetch('https://viacep.com.br/ws/09980490/json/').then((response) => {return response.json()})
        resolve(resp)
    })

    let secondPromise = new Promise((resolve, reject) => {
        let resp = fetch('https://viacep.com.br/ws/09981490/json/').then((response) => {return response.json()})
        resolve(resp)
    })

    let thirdPromise = new Promise((resolve, reject) => {
        let resp = fetch('https://viacep.com.br/ws/09981490/json/').then((response) => {return response.json()})
        resolve(resp)
    })

    promises.push(firstPromise, secondPromise, thirdPromise)

    Promise.all(promises).then((values) => console.log(values.forEach(resp => console.log(resp.logradouro))))
}


primeiroContatoComPromise(1, 5)
utilizaPromiseComReject(2, 0)
utilizaPromiseComCatch(3, 1)
executaVariasPromises()