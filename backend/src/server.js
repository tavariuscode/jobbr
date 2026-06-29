const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Permite receber dados em formato JSON nas requisições
app.use(express.json());
app.use(cors());

// Rota de teste inicial para validar o Proxy do Nginx
app.get("/api/status", (req, res) => {
  res.json({
    status: "Online",
    mensagem: "API do JobBR respondendo perfeitamente através do Nginx!",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
