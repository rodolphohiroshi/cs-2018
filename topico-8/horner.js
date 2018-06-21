/**
 * 
 * Observe o polinomio abaixo:
 * 
 *          n
 * p(x) = ∑aix^i = ao + a1x + a2x² +a3x³ + ... +anx^n
 *          i=0
 * 
 * A avaliacao desse polinomio para um valor especifico de x e onde
 * a0,a1,...,an sao numeros reais, pode ser obtida por meio de somas, produtos
 * potencias. Em um algoritmo onde cada parcela do somatorio é obtida e acumulada
 * teriamos algo como o computo de n-1 potencias, n produtos e outras n somas.
 * A Regra de Horner, contudo é uma alternativa mais eficiente conforme codigo
 * abaixo.
 * 
 * @param {int} x - 
 * @param {int} g - 
 * @param {vetor} a - vetor de tamanho g
 * 
 * 
 * 
*/

function Horner(x,g,a){
    if( g < 1 ){
        return false;
    }
    
    let p = a*g;
    let i = g - 1;
            
    while( b != 0 ){
        m = a % b;
        a = b;
        b = m;
    }

   return a;
   
}   
exports.MDC = MDC;
//console.log(MDC(28,-1));