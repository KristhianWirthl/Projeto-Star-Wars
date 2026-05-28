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

SELECT COUNT(classificacao) FROM ranking group by classificacao;

SELECT * FROM usuario;

-- 1 pra 1
-- 1 pra n
-- essa 1 pra 1 eu falo que vou implementar nos proximos passos, e ta ok, n precisa realmente fazer a conexao, importante é o diagrama