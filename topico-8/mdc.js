/**
    *O maior divisor comum de dois inteiros positivos e nao nulos é o maior
    * valor dentre os divisores comuns entre eles.
    * Ex: o maior divisor comum entre 10 e 5 é 5.
    * Entre 30 e 28 é 2.
    * Euclides apresentou um algoritmo para identificar o maior divisor comum
    * entre dois inteiros baseado na seguinte definição.
    *
    * MDC(a,b) = {      a,              se b=0                
    *            {  MDC(b, a mod b),    caso contrario
    *
    * Em conformidade com esta definição, MDC(81,54) = MDC(54,27) = MDC(27,0) = 27
    * Esta definicao é empregada pelo codigo abaixo.
    *
    *               
    *@param {int} a - Maior dos dois inteiros
    *@param {int} b - Menor dos dois inteiros
*/

function MDC(a,b){
    if( b > a || b < 0){
        return false;
    }
    
            
    while( b != 0 ){
        m = a % b;
        a = b;
        b = m;
    }

   return a;
   
}   
exports.MDC = MDC;
//console.log(MDC(28,-1));