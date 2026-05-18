var quizModel = require("../models/quizmodel");

function implementar(req, res){
    
    
    var classificacao = req.body.classificacaoServer;
    var pontuacao = req.body.pontuacaoServer;
    var fkusuario = req.body.fkusuarioServer;

        quizModel.implementar(classificacao, pontuacao, fkusuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log("Pontuação e Classificação adicionadas com sucesso")
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao adicionar o resultado do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    
    
    function ranking(req, res){
    
        quizModel.trazerinformacoestotal(classificacao, pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log("Foi adicionado na dashboard");
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Não foi adicionado na dashboard");   
                    console.log(
                        "\nHouve um erro ao adicionar na dashboard! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }  
    
        function rankingindicla(req, res){

            var fkUsuarioInc = req.params.id
    
        quizModel.rankingindicla('Youngling', fkUsuarioInc)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log("Foi adicionado na dashboard a classificação individual");
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Não foi adicionado na dashboard a classificação individual");   
                    console.log(
                        "\nHouve um erro ao adicionar na dashboard a classificação individual! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    } 

        function rankingindipontu(req, res){
    
        quizModel.rankingindipontu(pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log("Foi adicionado na dashboard a pontuação individual");
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Não foi adicionado na dashboard a pontuação individual");   
                    console.log(
                        "\nHouve um erro ao adicionar na dashboard a pontuação individual! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    } 

           function rankingindinome(req, res){

            var fkUsuarioInc = req.params.id
    
        quizModel.rankingindicla(nome, fkUsuarioInc)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log("Foi adicionado na dashboard a classificação individual");
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Não foi adicionado na dashboard a classificação individual");   
                    console.log(
                        "\nHouve um erro ao adicionar na dashboard a classificação individual! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    } 

module.exports = {
    implementar,
    ranking,
    rankingindicla,
    rankingindipontu,
    rankingindinome
}