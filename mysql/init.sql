-- Criar o banco de dados se não existir
CREATE DATABASE IF NOT EXISTS meubanco;

-- Garantir que estamos usando o banco de dados correto
USE meubanco;

-- Criar a tabela `usuarios` apenas se não existir
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    rfid VARCHAR(100) UNIQUE NOT NULL
);
