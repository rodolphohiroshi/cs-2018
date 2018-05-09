const funcao = require("../Propriedade3025");

QUnit.test("caso definição", function(assert) {
    assert.ok(funcao.propriedade3025(3025), "caso usado na definição");
});

QUnit.test("3024 não satisfaz retorna false", function(assert) {
    assert.notOk(funcao.propriedade3025(3024), "número que não satisfaz");
});

QUnit.test("1 satisfaz retorna true", function(assert) {
    assert.ok(funcao.propriedade3025(1), "1 * 1 == 1");
});