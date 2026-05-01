const { adicionar } = require("../controllers/usuarioController");
var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, idade, planeta_origem, especie, nave, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, idade, planeta_origem, especie, nave, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, idade, planeta_origem, especie, nave, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, idade, planeta_origem, especie, nave, email, senha) VALUES ('${nome}', '${idade}', '${planeta_origem}', '${especie}', '${nave}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

    function implementar(classificacao, pontuacao, fkusuario) {
        var instrucaoSql = `
        INSERT INTO ranking (classificacao, pontuacao, fkusuario) VALUES ('${classificacao}', '${pontuacao}', '${fkusuario}');
    `;
    return database.executar(instrucaoSql);
    }

    function trazerinformacoes(nome, classificacao, pontuacao, fkusuario){
        var instrucaoSql = `
        SELECT usuario.nome AS Nome, ranking.classificacao AS Classificação, ranking.pontuacao AS Pontuação FROM usuario LEFT JOIN ranking ON usuario.id = ranking.fkusuario;
    `;
    return database.executar(instrucaoSql);    
    }

    function trazerinformacoestotal(classificacao){
        var instrucaoSql = `
        SELECT ranking.classificacao AS Classificação FROM ranking;
    `;
    return database.executar(instrucaoSql);
    }    


module.exports = {
    autenticar,
    cadastrar,
    implementar,
    trazerinformacoes,
    trazerinformacoestotal
};