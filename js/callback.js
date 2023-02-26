/**
 * 
 * Callback
 * - São funções passadas como parametros de outras funções.
 * 
 */
function invocador(func) {
    return func    
}

function imprimeParamentros(...params){
    console.log(params)
}

invocador(imprimeParamentros)('sdasadsa')