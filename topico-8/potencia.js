/**
 * O valor de x elevado a y , por exemplo é 3² = 3*3, é definido por:
 * 
 *      y
 * xy = ∏x
 *     i=1
 * 
 * a function abaixo implementa potencia usando apenas simas, dado que reutiliza o
 * algoritmo Produto, fornecido anteriormente
 * 
 * Represents Potencia usando soma
 * @function Potencia - funcao que retornara a potencia de x usando a soma
 * @function produto - funcao que calcula  produto entre dois numeros inteiros atraves da soma
 * @param {int} x - numero que será calculado a sua potencia
 * @param {int} y - numero que será a potencia de x
 * @param {int} a - numero inteiro que será multiplicado
 * @param {int} b - numero inteiro que será multiplicado
 * 
*/

function Potencia(x,y){ // funcao que retornara a potencia y do numero x
    if( x <= 0 || y <=0 ){ //exige que x e y sejam maiores que 0
        return false;
    }
    
    let potencia = 1;
    let i = 1;
    
    while(i <= y ){ //enquanto i for menor ou igual a y faça:
        potencia = produto(potencia,x); //chamada a funcao produto para multiplicar a potencia de x
        i++;
    }
    
    return potencia;
}
exports.Potencia = Potencia;

function produto(a , b){ // funcao que retorna o produto atraves da soma
    if( a <= 0 || b <=0 ){ // exige que a e b sejam maiores que 0
        return false; //retorna false caso a e b sejam menores ou igual a 0
    }
    
    let totalParcelas = a; //quantidade de vezes que o laço ira repetir
    let parcela = b;
    
    if(b < a){ //caso b seja menor que a inverte a soma e os valores do laço de repetiçao
        totalParcelas = b; //quantidade de vezes que o laço ira repetir
        parcela = a;
    }
    let i = 1;
    let s = 0;
    while(i <= totalParcelas ){
        s = s + parcela;
        i++; 
    }
    return s; //retorna a multiplicacao de a e b atraves da soma
}
