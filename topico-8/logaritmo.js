/**
    *A potencia e^n é o numero de Euler e n um natural positivo é dados pelo somatorio abaixo:
    *
    *        ∞   
    *  e^n = ∑n^i/i! = 1 + n + n²/2! + n³/3!+...
    *       i=0
    *
    * Conforme a definicao acima só é possivel obter um valos aproximado, e cuja precisao
    * depende da quantidade de termos empregados pelo somatorio.
    *
    *
    *  *Represents a LogaritmoNatural
    *@constructor
    *@param {int} n - n é exponenciador
    *@param {int} k - identificador do processo
*/

function LogaritmoNatural(n, k){
    if( n < 1 || k < 2 ){
        return false;
    }
    let i = 2;
    let e = 1 + n;  
    let numerador = n; 
    let denominador = 1;
        
    while( i <= k){
        numerador = numerador * numerador;
        denominador = denominador * i;
        e = e + numerador/denominador;
        i++;

    }
    
    return e;
}
exports.LogaritmoNatural = LogaritmoNatural;

