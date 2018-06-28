//Funcao para testar o a funcao Pi()

const funcao = require("../valor_pi");

//1º caso de teste limite de  n = 1
QUnit.test("1º caso limite n = 1", function(assert) {
    assert.ok(funcao.Pi(1), "1º caso satisfaz pois n >= 1 ");
});

//2º caso de teste numero inteiro aleatorio para n 
QUnit.test("2º caso numero aleatorio para n ", function(assert) {
    assert.ok(funcao.Pi(28), "2º caso satisfaz pois n >= 1 ");
});

//3º caso de teste retorna false pois n < 1
QUnit.test("3º caso n < 1 ", function(assert) {
    assert.notOk(funcao.Pi(-5), "3º caso que não satisfaz n >= 1");
});

//4º caso de teste retorna false pois n = 0
QUnit.test("4º caso n = 0 ", function(assert) {
    assert.notOk(funcao.Pi(0,25), "4º caso que não satisfaz n >= 1");
});
