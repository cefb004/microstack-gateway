import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.originalUrl} | url interna: ${req.url}`);
  next();
});

// Proxy para Users
app.use(
  "/api/users",
  createProxyMiddleware({
    target: "http://localhost:8080", // URL do backend Users
    changeOrigin: true,
    pathRewrite: (path) => {
     const newPath = "/users" + path;
     console.log(`Reescrevendo path: ${path} → ${newPath}`);
     return newPath;
       },
    logLevel: "debug", // mostra detalhes do proxy
    onProxyReq(proxyReq, req, res) {
      console.log(`URL enviada ao backend: ${proxyReq.path}`);
    },
    onError(err, req, res) {
      console.error("Erro no proxy:", err);
      res.status(500).send("Erro no servidor proxy.");
    },
  })
);

// Você pode adicionar outros microserviços aqui (Orders, Notifications, etc.)
// exemplo para Orders:
// app.use("/api/orders", createProxyMiddleware({...}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Gateway rodando na porta ${PORT}`);
});

