//Funcao para testar o a funcao LogaritmoNatural()

const funcao = require("../logaritmo");

//1º caso de teste limite de n >= 1 e k >= 2
QUnit.test("1º caso limite n >= 1 e k >= 2", function(assert) {
    assert.ok(funcao.LogaritmoNatural(1,2), "1º caso satisfaz pois n >= 1 e k >= 2");
});

//2º caso de teste numeros naturais aleatorios para n e k 
QUnit.test("2º caso dois numeros inteiros aleatorios ", function(assert) {
    assert.ok(funcao.LogaritmoNatural(2,3), "2º caso satisfaz pois n >= 1 e k >= 2");
});

//3º caso de teste retorna false pois n <= 0
QUnit.test("3º caso n < 1 e k >= 2 ", function(assert) {
    assert.notOk(funcao.LogaritmoNatural(-2,11), "3º caso que não satisfaz n >= 1");
});

//4º caso de teste retorna false pois n = 0
QUnit.test("4º caso n = 0 e k >= 2 ", function(assert) {
    assert.notOk(funcao.LogaritmoNatural(0,5), "4º caso que não satisfaz n >= 1");
});

//5º caso de teste retorna false pois k < 2
QUnit.test("5º caso n >= 1 e k < 2 ", function(assert) {
    assert.notOk(funcao.LogaritmoNatural(17,-8), "5º caso que não satisfaz k >= 2");
});

//6º caso de teste retorna false pois k = 1
QUnit.test("6º caso n >= 1 e k = 1 ", function(assert) {
    assert.notOk(funcao.LogaritmoNatural(15,1), "6º caso que não satisfaz k >= 2");
});
