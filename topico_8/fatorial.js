/**
    *O fatorial de um numero natural n,n>=1, é definido abaixo
    *n! = ∏i = 1 × 2 × 3 ⋯ (n − 1) × n
    *
    *Represents a fatorial
    *@constructor
    *@param {int} n - numero a ser fatorado

*/

function fatorial(n){

    if( n < 1 ){
        return false;
    }
    let i = 2;
    let f = 1;
    while (i<=n) {
        f = f*i;
        i++;
    }

    return f;
}
exports.fatorial = fatorial;
