//Funcao para testar o Maior divisor comum da funcao mdc()

const funcao = require("../mdc");

QUnit.test("1º caso definicao", function(assert) {
    assert.ok(funcao.MDC(10,5), "1º caso usado na definicao");
});

QUnit.test("2º caso definição", function(assert) {
    assert.ok(funcao.MDC(30,28), "2º caso usado na definição");
});


QUnit.test(" a < b caso que nao satifaz", function(assert) {
    assert.notOk(funcao.MDC(28,30), "caso que não satisfaz");
});

QUnit.test(" b < 0 não satisfaz retorna false", function(assert) {
    assert.notOk(funcao.MDC(10,-1), "número que não satisfaz");
});
