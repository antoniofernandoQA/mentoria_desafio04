const { mock } = require('./mock.js');

// Função para listar pessoas e classificá-las com base na idade
function listarPessoas(lista) {
    lista.forEach(({ nome, idade, email }) => {
        let classificacao = "";

        // Determinar a classificação com base na idade da pessoa
        if (idade < 12) {
            classificacao = "criança";
        }
        else if (idade >= 12 && idade <= 17) {
            classificacao = "adolescente";
        }
        else { classificacao = "adulto"; }

        // Exibir informações da pessoa, incluindo a classificação
        console.log(`Nome: ${nome}, Idade: ${idade}, Email: ${email}, Classificação: ${classificacao}`);
    });

    // Retornar o número total de pessoas
    return lista.length;
}

// Exemplo de uso da função listarPessoas
const lista = mock;

// Chamar a função listarPessoas e obter o número total de pessoas
const numeroPessoas = listarPessoas(lista);

// Exibir o número total de pessoas
console.log(`Número de pessoas: ${numeroPessoas}`);

// Exportar a função listarPessoas
module.exports = { listarPessoas };
