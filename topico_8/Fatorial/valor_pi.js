/**
    *O valor de π é definido conforme abaixo:
    
    *      ∞
    *  π = ∑(−1)^i(4/2i+1) = 4/1-4/3+4/5-4/7+...
    *     i=0
    *
    * Para fins praticos um limite deve ser estabelecido para a quantidade de termos
    *do somatorio a serem considerados. Para um toral de n termos temos a função abaixo:
    *
*/

function Pi(n){
    if( n < 1 ){
        return false;
    }
    
    let i = 1;
    let s = -1;
    let d = -1;
    let p = 0;
        
    while( i <= n){
        d = d + 2;
        s = -1 * s;
        p = p+4*s/d;
        i++;

    }
    
    
    return p;
}
exports.Pi = Pi;

console.log(Pi(2));
