const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let produtos = [
  { id: 1, nome: "Cimento", preco: 35 },
  { id: 2, nome: "Areia", preco: 120 }
];

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.listen(3000, () => {
  console.log("Servidor rodando Casa 3 Irmãos");
});