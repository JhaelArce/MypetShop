const { Schema, model, connect, connection } = require("mongoose");

const petSchema = new Schema({
  description: String,
  name: String,
  price: String,

});

const Pet = model("alimentos", petSchema);

connect("mongodb+srv://gaston:aQZ2DCbqVdnd37iz@cluster0.gswhopq.mongodb.net/productos", { useUnifiedTopology: true });

const db = connection;

db.on("error", (error) => {
  console.error("Error de conexión a MongoDB:", error);
});

db.once("open", async () => {
  console.log("Successful connection to MongoDB Atlas");

  async function addProduct(name, price, description) {
    try {
      const nuevoProducto = new Pet({ name, price, description });
      const resultado = await nuevoProducto.save();
      console.log("Aggregate product:", resultado);
    } catch (err) {
      console.error("Error ", err);
    }
  }

  async function deleteProductByName(name) {
    try {
      const resultado = await Pet.deleteOne({ name });
      console.log("Product eliminated:", resultado);
    } catch (err) {
      console.error("Error ", err);
    }
  }

  async function editProductName(name, price, description) {
    try {
      const resultado = await Pet.updateOne({ name }, { cargo: price, description: nuevoTestimonio });
      console.log("Edited product:", resultado);
    } catch (err) {
      console.error("Error al editar el producto:", err);
    }
  }

  async function getData() {
    try {
      const pets = await Pet.find({});
      const petList = pets.map((pet, index) => [
        `Mascota ${index + 1}`,
        pet.name,
        pet.price,
        pet.description,
      ]);
      console.log("products: ");
      petList.forEach((mascota, index) => {
        console.log(`Number ${index + 1}:`);
        console.log(`name: ${mascota[1]}`);
        console.log(`price: ${mascota[2]}`);
        console.log(`description: ${mascota[3]}`);
        console.log("----------------------------");
      });
    } catch (err) {
      console.error("Error al consultar la base de datos:", err);
    }
  }


  addProduct("Dog shop", "12$", " the best food");
 // deleteProductByName("DOG MAX");
 // editProductName("DOG MAX", "30$", "the best");
//  getData();
});
