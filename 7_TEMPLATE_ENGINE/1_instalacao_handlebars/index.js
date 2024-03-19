const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/dashboard", (req, res) => {
  const items = ["Item A", "Item B", "Item C"];
  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js",
    comments: 4,
  };
  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const post = [
    {
      title: "Aprender Node.js",
      category: "JavaScript",
      body: "Este artigo vai te ajudar a aprender Node.js",
      comments: 4,
    },
    {
      title: "Aprender PHP",
      category: "PHP",
      body: "Este artigo vai te ajudar a aprender PHP",
      comments: 5,
    },
    {
      title: "Aprender Python",
      category: "Python",
      body: "Este artigo vai te ajudar a aprender Python",
      comments: 7,
    },
  ];
  res.render("blog", { post });
});

app.get("/", (req, res) => {
  const user = {
    name: "William",
    surname: "Correa",
    age: "35",
  };
  const palavra = "teste";
  const auth = true;
  const approved = true;

  res.render("home", { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
