function propriedade153(n){

    if( n < 0 || n > 9999 ){
        return false;
    }
    let c = Math.floor(n / 100);
    let du = n % 100;
    let d = Math.floor(du / 10);
    let u = du % 10;

    let result = (Math.pow((c),3)+Math.pow((d),3)+Math.pow((u),3));
    return result;
}
exports.propriedade153 = propriedade153;
