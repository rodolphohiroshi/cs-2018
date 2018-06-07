/**
    *O valor de x elevado a y , por exemplo é 3² = 3*3, é definido por:
    *      y
    * xy = ∏x
    *     i=1
    * a function abaixo implementa potencia usando apenas simas, dado que reutiliza o
    *algoritmo Produto, fornecido anteriormente
    *
*/

function Potencia(x,y){
    if( x <= 0 || y <=0 ){
        return false;
    }
    
    let potencia = 1;
    let i = 1;
    
    while(i <= y ){
        potencia = produto_soma(potencia,x);
        i++;
    }
    
    return potencia;
}
exports.Potencia = Potencia;

console.log(Potencia(3,4));


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