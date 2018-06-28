//Funcao para testar o a funcao Potencia()

const funcao = require("../potencia");

//1º caso de teste limite de x e y >0
QUnit.test("1º caso limite x e y > 0", function(assert) {
    assert.ok(funcao.Potencia(1,1), "1º caso satisfaz pois x e y > 0");
});

//2º caso de teste numeros inteiros aleatorios para x e y 
QUnit.test("2º caso potencia de dois numeros inteiros aleatorios ", function(assert) {
    assert.ok(funcao.Potencia(3,4), "2º caso satisfaz pois x e y > 0 ");
});

//3º caso de teste retorna false pois x <= 0
QUnit.test("3º caso x <= 0 e y > 0 ", function(assert) {
    assert.notOk(funcao.Potencia(-5,18), "3º caso que não satisfaz x > 0");
});

//4º caso de teste retorna false pois x = 0
QUnit.test("4º caso x = 0 e y > 0 ", function(assert) {
    assert.notOk(funcao.Potencia(0,25), "4º caso que não satisfaz x > 0");
});

//5º caso de teste retorna false pois y <= 0
QUnit.test("5º caso x > 0 e y <= 0 ", function(assert) {
    assert.notOk(funcao.Potencia(17,-8), "5º caso que não satisfaz y > 0");
});

//6º caso de teste retorna false pois y = 0
QUnit.test("6º caso x > 0 e y = 0 ", function(assert) {
    assert.notOk(funcao.Potencia(543,0), "6º caso que não satisfaz y > 0");
});
