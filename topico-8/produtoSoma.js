/**
 * O produto de dois inteiros positivos e dado pela equacao abaixo
 *
 *        a       b
 *a ∗ b = ∑b  =  ∑a
 *        i=1    i=1
 * 
 * 
 * Represents de inteiros usando a soma
 * @function produto - funcao que retornara o produto de dois numeros atraves da soma
 * @param {int} a - numero inteiro que será multiplicado
 * @param {int} b - numero inteiro que será multiplicado
 * 
 * 
*/

function produto(a,b){
    if( a <= 0 || b <=0 ){ //exige que a e b sejam maiores ou iguais
        return false; //valor a ser somado
    }
    
    let totalParcelas = a; //quantidade de vezes que o numero inteiro de b será somado
    let parcela = b;
    
    if(b < a){ // caso b seja menor que a 
        totalParcelas = b; //o valor de b se torna quantidade de vezes que será somado o a
        parcela = a; // valor a ser somado
    }
    let i = 1;
    let s = 0;
    while(i <= totalParcelas ){ //laço que realizara o produto de dois inteiros atraves da soma
        s = s + parcela;
        i++; 
    }
    return s; //retorna o resultado do produto de "a" e "b" atraves da soma
}
exports.produto = produto;
