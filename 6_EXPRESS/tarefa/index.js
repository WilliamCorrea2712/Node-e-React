const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./userRoutes");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Bem-vindo à minha aplicação Express!");
});

app.use("/users", userRoutes);

app.get("/index1", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "index1.html"));
});

app.get("/index2", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "index2.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
