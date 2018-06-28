/**
 *A razão áurea pode ser obtida através da aplicação de um processo iniciado com dois
 *números inteiros positivos, por exemplo, 1 e 2. O número segunte é obtido com a soma dos dois
 *anteriores da sequência. Nesse exemplo, seria 3 o seguinte 5, depois 8, depois 13 e assim
 *sucessivamente. Em algum momento esse processo é interrompido e a razão entre o último numero
 *da sequencia e o anterior define a razao áurea. Uma função correnpondente é definido abaixo.
 *
 *
 ** Represents RazaoAurea
 * @function RazaoAurea - funcao que retornar a soma dos dois numeros anteriores
 * @param {int} x - primeiro numero
 * @param {int} y - segundo numero
 * @param {int} k - k quantidade de vezes de execução do processo
 * 
 * 
*/
function RazaoAurea(x, y, k){ // funcao que recebe os 3 parametros
    if( x < 0 || x >= y || k <= 0){ //exige x maior ou igual a 0 , x menor que y e k maior 0
        return false;
    }
    let c = y;
    let a = x;  
    let i = 1; 
        
    while( i <= k){
       t = c;
       c = c + a; 
       a = t; 
       i++;
    }
    
    return c / a; 
}
exports.RazaoAurea = RazaoAurea;

console.log(RazaoAurea(1,2,4));
