const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

// Middleware para fazer o parsing do corpo da requisição como JSON
app.use(bodyParser.json());

// Rota POST
app.post('/', (req, res) => {
  // Obter o corpo da requisição
  const requestBody = req.body;
  
  // Obter os cabeçalhos da requisição
  const requestHeaders = req.headers;

  // Imprimir o corpo e os cabeçalhos no console
  console.log('Corpo da Requisição:', requestBody);
  console.log('Cabeçalhos da Requisição:', requestHeaders);

  res.send('Dados recebidos com sucesso!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
