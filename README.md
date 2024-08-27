# Microservice Listner - Typescript + Express + RabbitMQ + MongoDB + Docker + CI

![](https://img.shields.io/badge/BackEnd-Express-green) ![](https://img.shields.io/badge/Typescript-blue) ![](https://img.shields.io/badge/RabbitMQ-orange) ![](https://img.shields.io/badge/MongoDB-Green)

### 🎛️ Principais Dependencias

- [Typescript](https://www.typescriptlang.org/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/pt-br/)

### 🎯 Objetivo

A intenção desse projeto foi resolver o desafio de Backend Senior da BTG Pactual, onde consiste em criar um microsserviço que consulta uma fila no RabbitMQ e
forneça uma Rest API para consumir os dados processados e salvos em um banco não relacional.

### ⌨️ Como foi feito?

Antes de mais nada, para facilitar o processo, subi um `ambiente de desenvolvimento` usando o `Docker Compose` para criar os serviços tanto do RabbitMQ quanto do MongoDB, nos quais faria as primeira conexões.

Após isso fiz a modelagem do projeto me baseando nos principios do `DDD` como também me preocupando com o desaco
plamento das partes facilitando na hora de trocar tecnologias, tanto de consumo de filas e quanto a novos banco de 
dados.


### 🛣️ Rotas

- `/` - Rota principal de `health check` da aplicação.
- `get/products` - lista todos os produtos cadastrados no banco.
- `get/produc/:id` - mostra um único produto especifico a partir do seu ID.


### 🔎 Como utilizar

- `docker compose up`
- Ajuste o arquivo `example.env` para suas configurações de ambiente  
- `npm install`
- `npm start`

### 🔧 Próximos passos

- Implementação de cache, `REDIS` provavelmente.
- `Rate limit` para a api rest.

### 🎨 Autor

[LinkedIn](https://www.linkedin.com/in/fabiodeandrad/)
[Medium](https://medium.com/@fabioscript)
[E-mail](fabiodeandradecontato@gmail.com)
