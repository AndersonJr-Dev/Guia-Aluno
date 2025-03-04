# Gestor de Estudos

Este é um projeto de uma API para um Gestor de Estudos, desenvolvido com Node.js, Express e PostgreSQL. O objetivo deste projeto é fornecer uma API para gerenciar usuários e seus dados de estudo.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de arquivos:

## Funcionalidades

- **Rota de Teste**: Verifica se a API está rodando.
- **Cadastrar Usuário**: Permite cadastrar um novo usuário.
- **Listar Usuários**: Permite listar todos os usuários cadastrados.

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- dotenv

## Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

    ```plaintext
    DB_USER=seu_usuario
    DB_HOST=localhost
    DB_NAME=seu_banco
    DB_PASSWORD=sua_senha
    DB_PORT=5432
    PORT=3000
    ```

2. Instale as dependências do projeto:

    ```sh
    npm install
    ```

3. Crie a tabela `usuarios` no PostgreSQL:

    ```sql
    CREATE TABLE usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        senha TEXT NOT NULL
    );
    ```

## Executando o Projeto

Para iniciar o servidor, execute o seguinte comando:

```sh
npm start
O servidor estará rodando na porta definida na variável de ambiente PORT (por padrão, 3000).

Próximos Passos
Implementar autenticação e autorização de usuários.
Adicionar testes unitários.
Criar rotas para gerenciar dados de estudo dos usuários.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

