CREATE DATABASE STARWARS;

USE STARWARS;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    idade INT,
    planeta_origem VARCHAR(100),
    especie VARCHAR(100),
    nave VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

CREATE TABLE ranking (
    classificacao VARCHAR(25),
    pontuacao INT,
    fkusuario INT,
    CONSTRAINT constusuario FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);

CREATE TABLE aprendiz (
 idaprendiz INT PRIMARY KEY AUTO_INCREMENT,
 nomeMestre VARCHAR(45),
fkusuario INT,
CONSTRAINT constusuarioapre FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);

select * from usuario;	

drop table usuario;

SELECT usuario.nome AS Nome, ranking.classificacao AS Classificação, ranking.pontuacao AS Pontuação FROM usuario LEFT JOIN ranking ON usuario.id = ranking.fkusuario;

SELECT COUNT(classificacao), classificacao FROM ranking group by classificacao;

SELECT * FROM ranking;
SET @fkusuario = 1;
 SELECT  pontuacao AS Pontuação, classificacao AS Classificação FROM ranking WHERE fkusuario = @fkusuario ORDER BY pontuacao DESC LIMIT 1;