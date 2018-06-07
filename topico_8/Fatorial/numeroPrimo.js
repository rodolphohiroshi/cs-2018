/**
    *Um numero n maior que 1 é dito primo quando os unicos divisores desse numero sao 1 e
    *o proprio n. Uma solução para verificar se n é primo é verificar se qualquer um dos
    *numeros de 2 até n-1 é divisor de n, conforme a function abaixo.
    *@param {int} n - Numero a ser verificado
*/

function Primo(n){
    if( n <= 1){
        return false;
    }
    
    let i = 2;
            
    while( i < n ){
        if( n % i == 0){
            return false;    
        }
        i++;
    }

   return true;
   
}   
exports.Primo = Primo;
console.log(Primo(11));


