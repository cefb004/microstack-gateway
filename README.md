Microstack Gateway

API Gateway para a arquitetura distribuída do Microstack-J.

��� Visão Geral

O Microstack Gateway é o ponto central de entrada para todos os microserviços da plataforma Microstack-J, responsável por:

Roteamento entre serviços (Users, Orders, Notifications e Inventory)

Padronização de endpoints

Simplificação para o frontend Angular (um único domínio)

Facilitar deploy independente de cada microserviço

Atualmente, ele atua como reverse proxy utilizando express + http-proxy-middleware.

��� Tecnologias

Node.js

Express

http-proxy-middleware

CORS

dotenv

��� Estrutura do Projeto
´´´ text
microstack-gateway/
├── src/
│   └── app.js
├── node_modules/
├── .env
├── .env.example
├── package.json
└── README.md
´´´

