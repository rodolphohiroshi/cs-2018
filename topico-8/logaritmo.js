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
    *@function LogaritmoNatural - funcao que retorna a potencia de um numero de Euler por n 
    *@param {int} n - n é exponenciador, sendo um numero natural
    *@param {int} k - identificador do processo, sendo um numero de Euler
*/

function LogaritmoNatural(n, k){ // funcao que recebe dois parametros n e k
    if( n < 1 || k < 2 ){   //exige que n > 0 e k > 1
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



