const assert = require('assert');
const { listarPessoas } = require('./desafio4.js');
const { mock } = require('./mock.js');


describe('listarPessoas', function () {
    it('deve retornar o número correto de pessoas', function () {

        // Criar um mock para a lista de pessoas

        const lista = mock;

        // Chamar a função listarPessoas com o mock e exibe resultados

        const numeroPessoas = listarPessoas(lista);
        console.log(`Número de pessoas function: ${numeroPessoas}`);
        console.log(`Número de pessoas mock: ${mock.length}`);

        // Verificar se o resultado é igual ao número de pessoas no mock

        assert.strictEqual(numeroPessoas, mock.length);
    });
});
