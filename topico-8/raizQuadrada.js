/**
    *A função abaixo é obtido do Método Babilonico para a extração da raiz quadrada.
    *Quanto maior o valor de i mais preciso é o valor da raiz desejada.
    *
*/

function raizQuadrada(n, i){
    if( n <= 0){
        return false;
    }
    
    let r = 1;
            
    while( i >= 0 ){
        r = (r + n/r)/2;
        i --;
    }

   return r;
   
}   
exports.raizQuadrada = raizQuadrada;



