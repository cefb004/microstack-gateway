🚀 Overview

The Microstack Gateway is the central entry point for all microservices in the Microstack-J platform. It is responsible for:

Routing requests to services (Users, Orders, Notifications, and Inventory)

Standardizing endpoints

Simplifying access for the Angular frontend (single domain)

Enabling independent deployment of each microservice

Currently, it acts as a reverse proxy using Express + http-proxy-middleware.

🛠 Technologies

Node.js

Express

http-proxy-middleware

CORS

dotenv

📁 Project Structure
```text
microstack-gateway/
├── src/
│   └── app.js
├── node_modules/
├── .env
├── .env.example
├── package.json
└── README.md
```

