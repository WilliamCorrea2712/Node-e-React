const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const hbs = exphbs.create({ defaultLayout: "main" });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const produtos = [
    { id: 1, nome: "Produto 1", descricao: "Descrição do Produto 1" },
    { id: 2, nome: "Produto 2", descricao: "Descrição do Produto 2" },
    { id: 3, nome: "Produto 3", descricao: "Descrição do Produto 3" },
  ];
  res.render("home", { produtos });
});

app.get("/produto/:id", (req, res) => {
  const { id } = req.params;
  const produto = {
    id,
    nome: `Produto ${id}`,
    descricao: `Descrição do Produto ${id}`,
  };
  res.render("product", { produto });
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
