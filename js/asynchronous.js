/**
 * 
 * Asynchronous
 * - async -> Sempre utilizado antes da keyword "function".
 *      - Retorna um objeto Promise.
 *      - Por exemplo, async function nome(){}
 * - await -> Sempre utilizado para identificar resultados que dependem de chamadas assincronas.
 *      - Como exemplo, olhar a função executaSomaComDelay.
 * 
 * Muito utilizado para funções ou execuções que possam rodar em paralelo.
 */
async function somar(...numeros) {
    
    let totalSoma = 0

    numeros.map(valor => totalSoma += valor)

    return totalSoma
}

somar(1,2,3,4,5).then(valor => console.log(valor))


function somarComDelay(a, b){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000);
    })
}

async function executaSomaComDelay(){
    let valorX = 2
    let valorY = somarComDelay(1,2)

    return await valorY * valorX
}

executaSomaComDelay().then((valor => console.log(valor)))

