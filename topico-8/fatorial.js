/**
    *O fatorial de um numero natural n,n>=1, é definido abaixo
    *n! = ∏i = 1 × 2 × 3 ⋯ (n − 1) × n
    *
    *Represents fatorial
    *@function Fatorial - funcao que calcula o fatorial de um numero natural
    *@param {int} n - numero natural a ser calculado seu fatorial na funcao
    *
*/

function Fatorial(n){ // funcao que calcula o fatorial de n

    if( n < 1 ){ // limite de n é maior ou igual a 1
        return false; //caso n seja menor ou igual a 1 então retorna false
    }
    let i = 2; // i contador determinando o laço de repetição
    let f = 1;
    while (i <= n) { //enquanto i for menor ou igual ao n faça
        f = f*i;
        i++;
    }

    return f; // retorna f resultado da funcao fatorial
}
exports.Fatorial = Fatorial;

