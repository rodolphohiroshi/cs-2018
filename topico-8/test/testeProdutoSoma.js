//Funcao para testar o a funcao ProdutoSoma()

const funcao = require("../produtoSoma");

//1º caso de teste limite de a e b >0
QUnit.test("1º caso limite a e b > 0", function(assert) {
    assert.ok(funcao.produto(1,1), "1º caso satisfaz pois a e b > 0");
});

//2º caso de teste numeros inteiros aleatorios para a e b 
QUnit.test("2º caso dois numeros inteiros aleatorios ", function(assert) {
    assert.ok(funcao.produto(6,7), "2º caso satisfaz pois a e b > 0 ");
});


//3º caso de teste retorna false pois a <= 0
QUnit.test("3º caso a <= 0 e b > 0 ", function(assert) {
    assert.notOk(funcao.produto(-1,5), "3º caso que não satisfaz a > 0");
});

//4º caso de teste retorna false pois a = 0
QUnit.test("4º caso a = 0 e b > 0 ", function(assert) {
    assert.notOk(funcao.produto(0,54), "4º caso que não satisfaz a > 0");
});

//5º caso de teste retorna false pois b <= 0
QUnit.test("5º caso a > 0 e b <= 0 ", function(assert) {
    assert.notOk(funcao.produto(6,-4), "5º caso que não satisfaz b > 0");
});


//6º caso de teste retorna false pois b = 0
QUnit.test("6º caso a > 0 e b = 0 ", function(assert) {
    assert.notOk(funcao.produto(6,0), "6º caso que não satisfaz b > 0");
});
