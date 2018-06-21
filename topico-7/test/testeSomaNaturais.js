//Funcao para testar o codigo da Soma do primeiros naturais
const funcao = require("../somaNaturais");

QUnit.test("1º caso: 1 é limite minimo de n", function(assert) {
    assert.ok(funcao.SomaNaturais(1), "limite minimo de n");
});

QUnit.test("2º caso: 0 numero que nao satisfaz", function(assert) {
    assert.ok(funcao.SomaNaturais(0), "número que não satisfaz ");
});


QUnit.test("3º caso:  4 numero que satisfaz", function(assert) {
    assert.notOk(funcao.SomaNaturais(4), "número que satisfaz");
});


