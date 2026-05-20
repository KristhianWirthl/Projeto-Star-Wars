const { adicionar } = require("../controllers/quizController");
var database = require("../database/config")

    function implementar(classificacao, pontuacao, fkusuario) {
        var instrucaoSql = `
        INSERT INTO ranking (classificacao, pontuacao, fkusuario) VALUES ('${classificacao}', '${pontuacao}', '${fkusuario}');
    `;
    return database.executar(instrucaoSql);
    }

    function rankingindi(fkusuario){
        var instrucaoSql = `
         SELECT usuario.nome AS Nome, ranking.classificacao AS Classificação, ranking.pontuacao AS Pontuação FROM usuario LEFT JOIN ranking ON usuario.id = ranking.fkusuario WHERE ranking.fkusuario = ${fkusuario} ORDER BY pontuacao DESC LIMIT 1;
    `;
    return database.executar(instrucaoSql);    
    }

    function trazerinformacoestotal(){
        var instrucaoSql = `
        SELECT classificacao, COUNT(*) as Total FROM ranking GROUP BY classificacao;
    `;
    return database.executar(instrucaoSql);
    }    


module.exports = {
    implementar,
    rankingindi,
    trazerinformacoestotal
};