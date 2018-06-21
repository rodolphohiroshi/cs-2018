/**
    *A soma dos primeiros naturais ,N = {0,1,2,...}, é dada por
    *
    *   n
    *  ∑ i = 1 + 2 + ⋯ + n
    *   i=1
    *
    * O valor do somatorio para os primeiros k naturais é definido por k(k+1)/2.
    * Em vez de avaliar esta expressão que demanda o uso de um produto e uma 
    * divisão, pode-se optar pelo desenvolvimento do somatorio, conforme a
    * estrategia adotada pelo codigo abaixo.
    *
    *Represents Resto da Divisao Inteira
    *@constructor
    *@param {int} n - quantidade de numeros a serem somados

*/

function SomaNaturais(n){

    if( n < 1 ){
        return false;
    }
    let i = 2;
    let s = 1;
    
    while (i <= n) {
        s = s + i;
        i++;
    
    }

    return s;
}
exports.SomaNaturais = SomaNaturais;
