# Documento de inicialização backend

Este repositório contém as informações necessárias para facilitar deploy e instalação, do back-end do sistema Desafio-Ubistart no seu ambiente de desenvolvimento.

O deploy do projeto back-end Desafio-Ubistart pode ser executado usando o Node.Js, neste manual contém as informações necessárias para tal.

## 1. Estrutura de pastas

``` bash
📦 backend
 
 ┣ 📂 src
 ┃ ┣ 📂 config
 ┃ ┃ ┣ 📂 middleware
 ┃ ┃ ┃ ┣ 📜  index.ts
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📂 database
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📂 model
 ┃ ┃ ┣ 📜 Task.ts
 ┃ ┃ ┣ 📜 User.ts
 ┃ ┣ 📂 router
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📜 app.ts
 ┃ ┣ 📜 server.ts
 ┣ 📜 .env
 ┣ 📜 .example.env
 ┣ 📜 .gitignore
 ┣ 📜 package.json
 ┣ 📜 package-lock.json
 ┣ 📜 README.md
 ```
## 2. Pré-requisitos

* Instalar VS CODE para visualizar os projetos
  * https://code.visualstudio.com/Download <br/><br/>

* Instalar Node versão 16.13.1 (ou versão superior)
  * https://nodejs.org/en/download/ <br/><br/>
    

  * Verificar se o Node.js e NPM estão instalados.<br/>
  Quando instalamos o Node.js o gerenciador de pacotes NPM também é instalado, para confirmar a instalação do Node.js e NPM abra o terminal de comando e execute os comandos abaixo <br/><br/>
    node --version 
      ou
    npm --version

     se a instalação estiver correta a respostado terminal deve conter algo assim.
      $ node --version
      v16.13.1

      $ npm --version
      8.1.2
     ```

* Instalar a versão Git 2.25.1 (ou superior) 
  * https://git-scm.com/download/
## 3. Configurações

* Criar uma base de dados para o projeto ENSEI.

* Faça uma cópia do arquivo env.example

* Renomeie a cópia para. env

* Abra o arquivo. env que você acabou de criar e edite as variáveis de ambiente de acordo com as configurações do sistema onde o projeto vai ser instalado.
  * PORT=porta
  * DB_USER=usuario
  * DB_PASSWORD=senha

  * SECRET=codigo_secret <br /><br />

## 4. Configuração de deploy back-end usando o Node.js
Executar o comando para instalar as dependências (criar a pasta node_modules) e iniciar o projeto Desafio-Ubistart back-end.

Abra a pasta do projeto com o terminal de comando e execute os comandos:
```sh
$ cd <this repository>
$ npm i
$ npm run dev
```

## Comandos básicos para utilização do ENSEI back-end no Node.Js
Para usar os comandos abaixo é necessário abrir o terminal de comando e navegar até a pasta do projeto ENSEI back-end.

Abra a pasta do projeto com o terminal de comando

Executar o comando abaixo para instalar as dependências do BACKEND  (criar a pasta node modules).
```sh
$ npm i
ou
$ npm install
```

Executar o comando abaixo para iniciar o projeto BACKEND.
```sh
$ cd backend/
$ npm run dev
```

Executar o comando abaixo para parar o projeto BACKEND.
```sh
$ CTRL+C ou fechar o terminal
```

Para baixar atualizações (fazer o git pull, iniciar o projeto com as novas atualizações)
```sh
$ git pull
$ npm run dev
```

