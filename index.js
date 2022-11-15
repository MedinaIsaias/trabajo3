const express = require("express");
const Contenedor = require("./contenedor.js");
let ListProducts = new Contenedor("./productos.txt");

const app = express();
const port = process.env.PORT || 8080;


app.get("/", (req, res) => {
  res.send(`<h1 style="color: grey">Bienvenidos al servidor express!!</h1>`);
});


app.get("/productos", async (req, res) => {
  let dataFile = await ListProducts.getAll();

  res.json(dataFile);

});


app.get("/productoRandom", async (req, res) => {
  let dataFile = await ListProducts.getAll();
  let productRandom = dataFile[Math.floor(Math.random() * dataFile.length)];
  res.json(productRandom);
});


app.listen(port, () => {
  console.log("Server run on port " + port);
});