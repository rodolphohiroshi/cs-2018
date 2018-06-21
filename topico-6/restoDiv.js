/**
    *O resto da divisao inteira de 5 por 3 é 2. O resto da divisao inteira de 3
    * por 8 é 3. Abaixo o codigo que executa esta operacao
    *
    *Represents Resto da Divisao Inteira
    *@constructor
    *@param {int} x - numerador
    *@param {int} y - denominador

*/

function RestoDiv(x , y){

    if( y < 0 || x <= 0 ){
        return false;
    }
    let s = x;
    
    while (y <= s) {
        s = s - y;
    
    }

    return s;
}
exports.RestoDiv = RestoDiv;

