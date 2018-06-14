/**
    *É necessario fornecer um vetor com o tamanho do intervalo
    * a ser verificado o conjunto de numeros primos
    *
    *Represents crivo de eratostenes
    *@constructor {crivoEratostenes.crivo} crivo
    *@param {vetor} a[] - vetor de tamanho a ser definido
    *@param {int} n - quantidade de posiçoes do vetor


let a = []; 
*/

function crivoEratostenes(a,n) {
   
        let i = 0;
         for (i = 0; i < n; i++){
        a[i] = 0;
        }

         if( n <= 1 ){
         return false;
        }
    
        i = 2;
        let limite = Math.sqrt(n);

        while(i <= limite){
            if(a[i] == 0){
                multiplo = i+i;

                while(multiplo <= n){
                    a[multiplo] = 1;
                    multiplo= multiplo +i;
                }
            }
            
            i++;
        }
        for (i = 1; i <= n; i++){
            console.log(a[i]);
        }    
        return a[16];
}  

let c = new crivoEratostenes(a = [], 16);

console.log(crivoEratostenes.c);

