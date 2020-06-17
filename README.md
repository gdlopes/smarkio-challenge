# Teste Smarkio

## :rocket: Requisitos do teste

Desenvolver uma aplicação web em ​Node.js​ com banco de dados ​MySQL​. A aplicação consistirá somente de uma página com dois painéis: no painel posicionado a esquerda, o usuário poderá cadastrar novos comentários. No painel da direita todos os comentários cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado executará um áudio de leitura do comentário.

Para realizar a conversão do comentário de texto para áudio, o candidato deverá utilizar a [API ​Text to Speech ​do​ IBM Watson​](https://www.ibm.com/cloud/watson-text-to-speech).

## :scroll: Documentação

### Tecnologias utilizadas

- [nodejs](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [mysql](https://www.mysql.com/)
- [sequelize](https://sequelize.org/)
- [axios](https://www.npmjs.com/package/axios)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ibm-watson](https://github.com/watson-developer-cloud/node-sdk)
- [reactjs](https://pt-br.reactjs.org/)

### Instruções para rodar a API (back-end)

```
# Clonando o repositório
$ git clone https://github.com/gdlopes/smarkio-challenge.git

# Navegando para a pasta do projeto
$ cd linkapi-challenge

# Navegando para a pasta do backend
$ cd backend

# Instalando as dependências
$ yarn

# Rodando a aplicação
$ yarn dev
```

### Instruções para rodar o front-end

```
# Navegando para a pasta raiz do projeto
$ cd ..

# Navegando para a pasta do backend
$ cd frontend

# Instalando as dependências
$ yarn

# Rodando a aplicação
$ yarn start
```

### Alterando as credenciais

Primeiramente é necessário alterar as credenciais que estão no arquivo `.env` na pasta do backend. É necessário criar o bando de dados e adicionar as credenciais lá, assim como as credenciais da IBM.

Deixei pronto um arquivo de exemplo `.env.example`.

### Thats it ! :coffee:

---

by Gustavo Lopes :tada:
