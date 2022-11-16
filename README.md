# Desafio Full Stack Native

Este é um projeto realizado como desafio técnico Full Stack.
Implementei uma API, utilizando Node.js, para consumir informações de clientes em uma aplicação front-end, utilizando React.js.

## Back-end:
- Banco de dados MySQL
- Utilizei o framework Express.
- ORM Sequelize.
- Nodemon para manter ativo o servidor.
- Validações com JOI.
- Autenticação de token com JWT.

## Front-end:
- React.js
- Gerenciamento de estados com Context-API
- Para estilizar, Styled Components e Bootstrap.
- Axios para conversar com o CORS do Back-end.

# Rotas e EndPoints

#### Login
- A rota padrão (`/`) deve fazer redirecionamento para rota (`/login`)
- Campos nescessários: `first_name` e `email`

#### City

- Após o usuário logar, será redirecionado para a rota (`/city`) onde lista todas as cidades com o número de clientes.

- O usuário pode clicar em uma cidade, para ver os nomes dos clientes ela possui e será redirecionado para a rota (`/city/'nome da cidade'`) onde listará todos os nomes dos clientes desta cidade.

#### User

- Clicando em um cliente, será redirecionado para arota (`/user/id`) e terá acesso aos detalhes deste cliente

- Poderá fazer a edição deste usuário

# Orientações


1. Clone o repositório

- Use o comando: `git clone git@github.com:HenriqueSerres/desafio-full-stack-native.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd backend`

2. Instale as dependências do Back-end

- Para isso, use o seguinte comando: `npm install`

3. Se quiser rodar MySQL no Docker, rode o seguinte comando:

- `docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=123456 -d -p 3306:3306 mysql:5.7`

- Nãe esqueça de configurar o arquivo `.env` com as portas e password corretos.

4. Para ativar o servidor

- `npm run dev`

5. Para dropar o banco e popular novamente o banco de dados

- `npm run db:rebase`

6. Instale as dependências do Front-end 

- `cd frontend`

- `npm install`

7. Para abrir a aplicação no seu navegador

- `npm start`

## ESLint

Para fazer a análise estática do código neste projeto, utilizei o linter [ESLint](https://eslint.org/). Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

  
