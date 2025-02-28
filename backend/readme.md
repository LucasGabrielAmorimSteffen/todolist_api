# To-Do List API

Esta API permite o gerenciamento de tarefas para uma aplicação de lista de tarefas, com funcionalidades de criação, leitura, atualização e exclusão de tarefas.

## Funcionalidades

- **GET /tasks**: Retorna todas as tarefas.
- **POST /tasks**: Cria uma nova tarefa.
- **DELETE /tasks/:id**: Deleta uma tarefa específica.
- **PUT /tasks/:id**: Atualiza uma tarefa específica.

## Endpoints

### `GET /tasks`
Retorna todas as tarefas.

#### Exemplo de resposta:
```json
[
  {
    "id": 1,
    "title": "Tarefa 1",
    "status": "pendente",
    "created_at": "2025-02-27T12:00:00Z"
  },
  {
    "id": 2,
    "title": "Tarefa 2",
    "status": "pendente",
    "created_at": "2025-02-27T12:05:00Z"
  }
]
```
### `GET /tasks`
Cria uma nova tarefa.

#### Corpo da requisição:
```json
{
  "title": "Nova Tarefa",
  "status": "pendente"
}
```
Exemplo de resposta:
````json
{
  "id": 3,
  "title": "Nova Tarefa",
  "status": "pendente",
  "created_at": "2025-02-27T12:10:00Z"
}
````
### `DELETE /tasks/:id`
Deleta uma tarefa específica.

#### Exemplo de resposta:
````json
{}
````
### `PUT /tasks/:id`
Atualiza uma tarefa específica.

#### Corpo da requisição:
````json
{
  "title": "Tarefa Atualizada",
  "status": "concluída"
}
````
Exemplo de resposta:
````json
{}
````
## Middlewares
* validadeFieldTitle
<h4> Este middleware valida o campo title nas requisições: 

Se o campo title não for fornecido, retorna um erro 400.
Se o campo title estiver vazio, retorna um erro 400.
* validadeFieldStatus
Este middleware valida o campo status nas requisições:

Se o campo status não for fornecido, retorna um erro 400.
Se o campo status estiver vazio, retorna um erro 400.
</h4>

## Configuração
* Variáveis de Ambiente
<h4>Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:</h4>

````env
PORT=sua_porta
PG_HOST=seu_host
PG_USER=seu_usuario
PG_PASSWORD=sua_senha
PG_PORT=sua_porta_db
PG_DB=nome_do_banco

````

## Como Rodar a API?
### Clone o repositório:
````bash
git clone https://github.com/LucasGabrielAmorimSteffen/todolist_api.git
````
### Instale as dependências:
````bash
cd todolist_api/backend
npm install
````
### Crie o arquivo .env com as variáveis de ambiente conforme mencionado acima.
### Inicie o servidor:
````bash
npm run dev
````

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: JavaScript no servidor.
- **[Express](https://expressjs.com/)**: Framework minimalista para construção de APIs.
- **[PostgreSQL](https://www.postgresql.org/)**: Banco de dados relacional.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Para carregar variáveis de ambiente.
- **[pg (pg-pool)](https://node-postgres.com/)**: Cliente PostgreSQL para Node.js.
