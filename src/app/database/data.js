const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Conectado a la base de datos");
});

// CRUD Endpoints
app.post("/items", (req, res) => {
  /* Crear */
});
app.get("/items", (req, res) => {
  /* Leer */
});
app.put("/items/:id", (req, res) => {
  /* Actualizar */
});
app.delete("/items/:id", (req, res) => {
  /* Eliminar */
});

app.listen(4200, () => console.log("Servidor corriendo en el puerto 4200"));
