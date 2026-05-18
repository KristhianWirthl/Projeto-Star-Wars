const { adicionar } = require("../controllers/quizController");
var database = require("../database/config")

    function implementar(classificacao, pontuacao, fkusuario) {
        var instrucaoSql = `
        INSERT INTO ranking (classificacao, pontuacao, fkusuario) VALUES ('${classificacao}', '${pontuacao}', '${fkusuario}');
    `;
    return database.executar(instrucaoSql);
    }

    function rankingindicla(classificacao, fkusuario){
        var instrucaoSql = `
         SELECT  classificacao AS Classificação FROM ranking WHERE fkusuario = ${fkusuario} ORDER BY pontuacao DESC LIMIT 1;
    `;
    return database.executar(instrucaoSql);    
    }
        function rankingindipont(pontuacao, fkusuario){
        var instrucaoSql = `
         SELECT  pontuacao AS Pontuação FROM ranking WHERE fkusuario = ${fkusuario} ORDER BY pontuacao DESC LIMIT 1;
    `;
    return database.executar(instrucaoSql);    
    }
      function rankingindinome(nome, fkusuario){
        var instrucaoSql = `
         SELECT  nome AS Nome FROM ranking WHERE fkusuario = ${fkusuario} ORDER BY pontuacao DESC LIMIT 1;
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
    rankingindicla,
    rankingindipont,
    rankingindinome,
    trazerinformacoestotal
};