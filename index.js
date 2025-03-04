// Importação das dependências
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

// Configuração do servidor
const app = express();
app.use(express.json());

// Conexão com o banco de dados PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Rota de teste
app.get('/', (req, res) => {
    res.send('API do Gestor de Estudos está rodando!');
});

// Rota para cadastrar um usuário
app.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, senha]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});

// Rota para listar usuários
app.get('/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar usuários');
    }
});

// Configuração do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Próximos Passos:
// 1. Criar a tabela `usuarios` no PostgreSQL
//    CREATE TABLE usuarios (
//        id SERIAL PRIMARY KEY,
//        nome VARCHAR(100) NOT NULL,
//        email VARCHAR(100) UNIQUE NOT NULL,
//        senha TEXT NOT NULL
//    );
//
// 2. Configurar variáveis de ambiente no arquivo `.env`:
//    DB_USER=seu_usuario
//    DB_HOST=localhost
//    DB_NAME=seu_banco
//    DB_PASSWORD=sua_senha
//    DB_PORT=5432
//    PORT=3000
