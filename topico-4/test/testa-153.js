//Funcao para testar o codigo da propriedade 153 
const funcao = require("../Propriedade153");

QUnit.test("caso definição", function(assert) {
    assert.ok(funcao.propriedade153(153), "caso usado na definição");
});

QUnit.test("154 não satisfaz retorna false", function(assert) {
    assert.notOk(funcao.propriedade153(154), "número que não satisfaz");
});

QUnit.test("1 satisfaz retorna true", function(assert) {
    assert.ok(funcao.propriedade153(1), "1 * 1 == 1");
});