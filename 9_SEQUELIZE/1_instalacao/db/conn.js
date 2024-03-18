const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

/*try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso com o sequilize");
} catch (err) {
  console.log("Não foi possivel conectar: ", error);
}*/

module.exports = sequelize;
