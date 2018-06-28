//Funcao para testar o a funcao Fatorial()

const funcao = require("../fatorial");

//1º caso de teste é necessario que n seja maior ou igual a 1
QUnit.test("1º caso limite é n > =1", function(assert) {
    assert.ok(funcao.Fatorial(1), "1º caso testando o limite de n");
});


QUnit.test("2º caso numero natural aleatorio ", function(assert) {
    assert.ok(funcao.Fatorial(16), "2º caso satisfaz pois n é maior que 1 e natural");
});


//3º caso de teste retorna false pois n precisa ser maior que 1
QUnit.test(" 3º caso n = 0", function(assert) {
    assert.notOk(funcao.Fatorial(0), "3º caso que não satisfaz n > 1");
});
