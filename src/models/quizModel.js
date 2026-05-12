const { adicionar } = require("../controllers/quizController");
var database = require("../database/config")

    function implementar(classificacao, pontuacao, fkusuario) {
        var instrucaoSql = `
        INSERT INTO ranking (classificacao, pontuacao, fkusuario) VALUES ('${classificacao}', '${pontuacao}', '${fkusuario}');
    `;
    return database.executar(instrucaoSql);
    }

    function trazerinformacoesusuario(nome, classificacao, pontuacao, fkusuario){
        var instrucaoSql = `
         SELECT  pontuacao AS Pontuação, classificacao AS Classificação FROM ranking WHERE fkusuario = ${fkusuario} ORDER BY pontuacao DESC LIMIT 1;
    `;
    return database.executar(instrucaoSql);    
    }

    function trazerinformacoestotal(classificacao){
        var instrucaoSql = `
        SELECT COUNT(classificacao) FROM ranking GROUP BY classificacao;
    `;
    return database.executar(instrucaoSql);
    }    


module.exports = {
    implementar,
    trazerinformacoesusuario,
    trazerinformacoestotal
};