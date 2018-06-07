/**
    *O produto de dois inteiros positivos e dado pela equacao abaixo
    *        a       b
    *a ∗ b = ∑b  =  ∑a
    *        i=1    i=1
    *
    *
    *
*/

function produto(a,b){
    if( a <= 0 || b <=0 ){
        return false;
    }
    
    let totalParcelas = a;
    let parcela = b;
    
    if(b < a){
        totalParcelas = b;
        parcela = a;
    }
    let i = 1;
    let s = 0;
    while(i <= totalParcelas ){
        s = s + parcela;
        i++; 
    }
    return s;
}
exports.produto = produto;

console.log(produto(6,7));