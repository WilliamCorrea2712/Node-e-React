const { ObjectId } = require("mongodb");
const conn = require("../db/conn");

class Product {
  constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }

  async save() {
    try {
      const result = await conn.db().collection("products").insertOne({
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.image,
      });
      console.log("Produto salvo com sucesso!");
      return result;
    } catch (error) {
      console.error("Erro ao salvar o produto:", error);
      throw error;
    }
  }

  static async getProducts() {
    try {
      const products = await conn.db().collection("products").find().toArray();
      return products;
    } catch (error) {
      console.error("Erro ao obter produtos:", error);
      throw error;
    }
  }

  static async getProductById(id) {
    try {
      const product = await conn
        .db()
        .collection("products")
        .findOne({ _id: new ObjectId(id) });
      return product;
    } catch (error) {
      console.error("Erro ao obter produto por ID:", error);
      throw error;
    }
  }

  static async removeProduct(id) {
    try {
      await conn
        .db()
        .collection("products")
        .deleteOne({ _id: new ObjectId(id) });
    } catch (error) {
      console.error("Erro ao remover produto:", error);
      throw error;
    }
  }

  async updateProduct(id) {
    try {
      await conn
        .db()
        .collection("products")
        .updateOne({ _id: new ObjectId(id) }, { $set: this });
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      throw error;
    }
  }
}

module.exports = Product;
