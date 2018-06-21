//Funcao para testar o codigo do Resto da divisao inteira
const funcao = require("../restoDiv");

QUnit.test("1º caso definicao", function(assert) {
    assert.ok(funcao.RestoDiv(5,3), "1º caso usado na definicao");
});

QUnit.test("2º caso definição", function(assert) {
    assert.ok(funcao.RestoDiv(3,8), "2º caso usado na definição");
});


QUnit.test("-1 para y não satisfaz retorna false", function(assert) {
    assert.notOk(funcao.RestoDiv(5,0), "número que não satisfaz");
});

QUnit.test("0 para x não satisfaz retorna false", function(assert) {
    assert.notOk(funcao.RestoDiv(0,2), "número que não satisfaz");
});

