/**
 * 
 * Fetch
 * - Utilzado para efetuar chamadas http para outros serviços.
 * 
 * Métodos
 * - then(arrowFunction) -> Utilizado para processar aas respostas.
 * - catch(arrowFunction) -> Utilizado para capturar as exceções da requisição das chamadas.
 */
fetch('https://viacep.com.br/ws/09981490/json/')
    .then((response) => console.log(response.json()))
    .catch((reason) => console.error(reason))