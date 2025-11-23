import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

// Rota para backend atual (monolito Java)
app.use(
  "/api/users",
  createProxyMiddleware({
    target: process.env.JAVA_BACKEND_URL || "http://localhost:8080",
    changeOrigin: true,
  })
);

// Rota genérica (futuramente: orders, notifications, etc.)
app.use(
  "/api/orders",
  createProxyMiddleware({
    target: process.env.ORDERS_SERVICE_URL || "http://localhost:8081",
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Gateway rodando na porta ${PORT}`));

