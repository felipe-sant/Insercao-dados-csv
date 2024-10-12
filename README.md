# Importação de CSV com conexão com Postgres

## Como rodar

1. Instale as dependencias do projeto:

    npm install

2. Crie as tabelas do postgres:

    npm run createTable

3. Rode o projeto:

    npm start

4. Para importar os projetos acesse as rotas http://localhost:3001/(nome_da_tabela)/importar com metodo POST.