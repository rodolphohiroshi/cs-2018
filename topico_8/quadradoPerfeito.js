/**
    *Diz-se que um quadrado perfeito n² satisfaz a seguinte equação.
    
    *      n
    * n² = ∑(2k − 1) = 1 + 3 + 5 + ⋯ + (2n − 3) + (2n − 1)
    *     k=1
    *
    * A função abaixo retorna verdadeiro se o numero fornecido é um quadrado perfeito
    *
*/

function quadradoPerfeito(n){
    if( n < 1 ){
        return false;
    }
    
    let i = 1;
    let s = 1;
        
    while( s < n){
        i = i + 2;
        s = s + i;

    }
    if(s == n){
        return true;
    }
    return false;
   
}   
exports.quadradoPerfeito = quadradoPerfeito;

console.log(quadradoPerfeito(36));

